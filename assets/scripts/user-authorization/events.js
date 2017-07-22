'use strict';

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

//prevent default refresh and calls ./api function to sign user up
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

//prevent default refresh and calls ./api function to sign user in
const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

//prevent default refresh and calls ./api function to change user pass
const onChangePassword = function onChangePassword(event){
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

//prevent default refresh and calls ./api function to sign out
const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#select-sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
