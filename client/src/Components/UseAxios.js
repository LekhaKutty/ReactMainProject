import Axios from 'axios';

/*import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
Axios(options);*/

export const register = newUser => {
    return Axios
      .post('http://localhost:5000/signup', {
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
      .catch(function (error) {
        console.log(error);
      });
  }