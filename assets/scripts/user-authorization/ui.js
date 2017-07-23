'use strict';

const app = require('../app');
//console logs data
const success = (data) => {
  console.log(data);
};
//console logs error
const failure = (error) => {
  console.error(error);
};
//console logs "you signed in "
const signInSuccess = (data) => {
  app.user = data.user;
  console.log("You signed in");
  $('#sign-up').modal('hide')
};
const signUpSuccess = (data) => {
};

const signOutSuccess = () => {
  console.log("You signed out");
  console.log(app.user);
  delete app.user;
  console.log(app.user);
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
