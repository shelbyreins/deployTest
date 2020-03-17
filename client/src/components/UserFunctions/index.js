import axios from 'axios';

export const register = newUser => {
  return axios
    .post('/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      age: newUser.age,
      gender: newUser.gender,
      weight: newUser.weight,
    })
    .then(response => {
    })
}

export const login = user => {
  return axios
    .post('login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token);
      localStorage.setItem("userId", response.data.userId);
      return response.data;
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('profile', {
      headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const drinks = drink => {
  return axios
    .post("addDrink", {
      userId: drink.userId,
      event: drink.event,
      date: drink.date
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    });
}

export const getAllEvents = event => {
  return axios
    .get("/getAllEvents/" + event.userId)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    })
}

export const deleteEvent = event => {
  return axios
    .get("/deleteEvent/" + event.userId + "/" + event.date + "/" + event.event)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}