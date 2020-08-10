import axios from 'axios';

export const register = (newUser) => {
  return axios
    .post('/api/users/signup', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      user_name: newUser.user_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log('Registered');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (user) => {
  return axios
    .post('/api/users/', {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem('usertoken', response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
