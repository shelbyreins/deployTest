import React, { Component } from 'react'
import "./style.css"
import { register } from '../UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      gender: '',
      age: '',
      weight: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      age: this.state.age,
      gender: this.state.gender,
      weight: this.state.weight,
    }

    let keyNum = 0;

    for (let key in newUser) {
      if (newUser[key] === "") {
        alert("All fields must be filled");
        break;
      }
      keyNum++;
    }
    
    if (keyNum === 7) {
      if (newUser.age >= 21) {

        register(newUser).then(res => {
          this.props.history.push(`/login`)
        });
      }
      else {
        alert("You must be 21 years or older");
      }
    }
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={this.onSubmit} >
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name<span className="required">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name <span className="required">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address<span className="required">*</span></label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password<span className="required">*</span> </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender<span className="required">*</span></label>
                <select
                  type="gender"
                  className="form-control"
                  id="select-inputs"
                  name="gender"
                  placeholder="Select gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                >
                  <option className="inputs">Select gender</option>
                  <option className="inputs">Female</option>
                  <option className="inputs">Male</option>
                  <option className="inputs">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Enter age">Age<span className="required">*</span></label>
                <input
                  type="age"
                  className="form-control"
                  name="age"
                  placeholder="Enter age"
                  value={this.state.age}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight<span className="required">*</span></label>
                <input
                  type="weight"
                  className="form-control"
                  name="weight"
                  placeholder="Enter weight"
                  value={this.state.weight}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block" id="register-btn"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register