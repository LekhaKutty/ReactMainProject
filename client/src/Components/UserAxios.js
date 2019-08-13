import axios from 'axios';

export const register = newUser => {
    return axios
      .post('/signup', {
        firstname: newUser.firstname,
        lastname:newUser.lastname,
        mobilenumber:newUser.mobilenumber,
        email: newUser.email,
        country:newUser.country,
        username:newUser.username,
        password: newUser.password
      })
      .then(response => {
        console.log('Registered')
      })
  }