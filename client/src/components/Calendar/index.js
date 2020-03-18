import React from "react";
import { drinks, getAllEvents, removeEvent } from "../UserFunctions";
import "./style.css";



class Day extends React.Component {
  constructor(props) { super(props); }
  render() {
    let cls = (this.props.selected) ? " day-active" : "";
    if (this.props.hasEvents) cls += " has-events";
    if (this.props.hasMatches) cls += " has-matches";

    let day = this.props.day;
    return (
      day > 0
        ? (
          <div id="day" className={"day" + cls} onClick={e => this.props.setDay(this.props.day, e)}>
            {this.props.day}
          </div>
        )
        : (<div className="day day-empty"></div>)
    );
  };
};

class Form extends React.Component {
  constructor(p) { super(p); }
  render() {
    return (
      <form onSubmit={(e) => this.props.submit(e)} >
        <div className="input-group">
          <select className="input-main mb-2" id="calendar-select"
            onChange={(e) => this.props.update(e.target.value)}
            type="event" placeholder="Select Event"
            value={this.props.value}
          >
            <option className="inputs">Select Event</option>
            <option className="inputs">Watched Video</option>
            <option className="inputs">AA Meeting</option>
            <option className="inputs">Alcohol Drink</option>
            <option className="inputs">No Alcohol</option>
            <option className="inputs">Other</option>
          </select>

          <br/>

          <button type="submit" className="btn-main" id="btn-calendar">Add Event</button>
        </div>
      </form>
    );
  };
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.props.day,
      month: this.props.month - 1,
      year: this.props.year,
      cursor: "",
      search: "",
      event: "",
      events: {},
      quantity: ""
    };
    this.setDay = this.setDay.bind(this);
    this.setDate = this.setDate.bind(this);
    this.resetDate = this.resetDate.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);

    this.addEvent = this.addEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.saveEvents = this.saveEvents.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
  };

  componentWillMount() {
    window.addEventListener('unload', this.saveEvents);
    this.setDate(this.props.day, this.props.month - 1, this.state.year);
    this.loadEvents();
  };
  componentWillUnmount() {
    window.removeEventListener('unload', this.saveEvents);
    this.saveEvents();
  };

  getMonthName(idx) {
    return ["January", "February", "March", "April",
      "May", "June", "July", "August", "September",
      "October", "November", "December"][idx];
  };

  formatDate(day, month, year) {
    day = (day.toString().length < 2) ? '0' + day : day;
    month += 1;
    month = (month.toString().length < 2) ? '0' + month : month;
    return `${day}.${month}.${year}`;
  };

  setDate(day, month, year, e) {
    if (e) e.preventDefault();
    let date = this.formatDate(day, month, year);
    this.setState({ cursor: date });
  };
  setDay(day, e) {
    this.setDate(day, this.state.month, this.state.year, e);
  };
  resetDate(e) {
    e.preventDefault();
    this.setState({ year: this.props.year, month: this.props.month - 1, day: this.props.day });
    this.setDate(this.props.day, this.props.month - 1, this.props.year);
  };
  prevMonth(e) {
    e.preventDefault();
    let m = (this.state.month - 1 === -1) ? 11 : this.state.month - 1;
    let y = (m === 11) ? this.state.year - 1 : this.state.year;
    this.setState({ year: y, month: m });
  };
  nextMonth(e) {
    e.preventDefault();
    let m = (this.state.month + 1 === 12) ? 0 : this.state.month + 1;
    let y = (m === 0) ? this.state.year + 1 : this.state.year;
    this.setState({ year: y, month: m });
  };

  saveEvents() {

    localStorage.setItem("event", this.state.event);
    let userData = {
      userId: localStorage.getItem("userId"),
      event: localStorage.getItem("event"),
      date: this.state.cursor
    };
    drinks(userData).then(res => {
      if (res) {

        
      };
    });
  };
  loadEvents() {
    let occasions = {};
    let userId = {
      userId: localStorage.getItem("userId"),
    };
    getAllEvents(userId).then(res => {
      if (res) {
        res.forEach(entry => {
          occasions[entry.date] = [entry.event];
        });
        if (occasions) {
          this.setState({ events: occasions });
          localStorage.setItem("events", this.state.events);
        };
      };
    });
  };
  getEvents(key) {
    if (this.state.events[key]) {
      return this.state.events[key];
    };
    return [];
  };
  updateEvent(e) { this.setState({ event: e }); };

  addEvent(e) {
    if (e) e.preventDefault();
    console.log("e: ", e);
    let event = this.state.event.trim();
    if (!event) return;
    let events = this.state.events;
    let date = this.state.cursor;
    if (!events[date]) events[date] = [];
    events[date].push(event);
    this.setState({ event: "", events: events });
    this.saveEvents()
  };
  removeEvents(date) {
    let events = this.state.events;
    let event = localStorage.getItem("event");
    let userId = localStorage.getItem("userId");
    delete events[this.date];

    const userData = {
      userId: userId,
      date: date,
      event: event
    };


    removeEvent(userData)
      .then(res => {
      })
      .catch(err => {
        console.log("err: ", err);
      })
    this.setState({ events: events });
  };
  removeEvent(date, idx) {
    if (this.state.events[date]) {
      let events = this.state.events;
      localStorage.setItem("event", events[date]);
      events[date].splice(idx, 1);
      if (!events[date].length) {
        this.removeEvents(date);
      } else {
        this.setState({ events: events });
      };
    };
  };

  render() {
    let date = new Date(this.state.year, this.state.month, 1);
    let weekDay = (date.getDay() !== 0) ? date.getDay() : 7;

    date.setMonth(date.getMonth() + 1);
    date.setDate(1);
    date.setDate(date.getDate() - 1);
    let lastDay = date.getDate();

    let calendar = [];
    let start = weekDay - 1, end = weekDay + lastDay - 1;
    for (let i = 0; i < 42; ++i) {
      if (i >= start && i < end) {
        calendar[i] = i - weekDay + 2;
      } else {
        calendar[i] = '';
      };
    };

    let dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((item, i) => {
      return (<div className="day">{item}</div>);
    });
    let cursorDate = this.state.cursor.split('.');

    let days = calendar.map((item, i) => {
      if (item) {
        let date = this.formatDate(item, this.state.month, this.state.year);

        let thisMonth = (this.state.month == cursorDate[1] - 1)
          && (this.state.year == cursorDate[2]);

        let selected = (item == cursorDate[0]) && thisMonth;

        let hasEvents = thisMonth &&
          (Array.isArray(this.state.events[date])) &&
          (this.state.events[date].length);
        let events = hasEvents ? this.state.events[date] : [];

        let hasMatches = false;
        if (hasEvents && this.state.search) {
          for (let i = 0; i < events.length; ++i) {
            if (events[i].includes(this.state.search)) {
              hasMatches = true; break;
            };
          };
        };
        return (
          <Day key={i} day={item} selected={selected}
            hasEvents={hasEvents} hasMatches={hasMatches}
            setDay={this.setDay}
          />
        );
      } else {
        return (<Day key={i} day={-1} />);
      };
    });
    let events = this.getEvents(this.state.cursor).map((item, i) => {
      return (
        <li key={i}>{item}
          <a href="#" onClick={() => this.removeEvent(this.state.cursor, i)}>–</a>
        </li>
      );
    });

    return (
      <React.Fragment>
              <div id="border">
                <div className="calendar" >
                  {/* Month selector */}
                  <div className="month">
                    <span className="month-active">
                      <b>{this.getMonthName(this.state.month)}</b>{" " + this.state.year}
                    </span>
                    <span className="month-selector">
                      <a className="prev" href="#" onClick={this.prevMonth}>⟵</a>
                      <a className="reset" href="#" onClick={this.resetDate}>○</a>
                      <a className="next" href="#" onClick={this.nextMonth}>⟶</a>
                    </span>
                  </div>
                  {/* Days grid */}
                  <div className="weekdays">{dayNames}</div>
                  <div className="days">{days}</div>
                </div>

                {/* Event list */}
                <div className="events">
                  <h4 className="date-active">{this.state.cursor}</h4>
                  {events.length > 0 && (<ul className="ml-5">{events}</ul>)}
                </div>

                {/* New event */}
                <div className="event-add">
                  <Form value={this.state.event} submit={this.addEvent} update={this.updateEvent} />
                </div>
              </div>    
      </React.Fragment>
    );
  };
};

export default Calendar;