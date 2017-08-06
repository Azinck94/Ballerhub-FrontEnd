'use strict'
const store = require('../store')

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const signUpSuccess = () => {
  $('#sign-in-log').text('Signed Up')
  $('.sign-up').val('')
}

const signUpFailure = () => {
  $('#sign-in-log').text('Email already in use')
  $('.sign-up').val('')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in-log').text('Signed in')
  $('#sign-in').hide(1000)
  $('#sign-up').hide(1000)
  $('#baller-board').fadeIn(500).css('display', 'block')
  $('#sign-out').show(1000)
  $('#change-password').show(1000)
  $('#baller-section').show(1000)

  // $('.sign-up-modal-header').text('')
  // $('.sign-in-modal-header').text('')
}
// $(document).ready(function() {
//     $('div.mainsuccess,div.mainerror').hide(0).fadeIn(1000);
//     $('form.register').submit(function(e) {
//         e.preventDefault();// will stop the form being submited...
//         $(this).hide(1000);
//         // do ajax here...
//         return false;
//     });
// });
const signInFailure = () => {
  $('#sign-in-log').text('Please Try to Sign In Again')
}

const signOutSuccess = () => {
  $('#sign-in').fadeIn(500).css('display', 'block')
  $('#sign-up').fadeIn(500).css('display', 'block')
  $('#baller-board').empty()
  $('#sign-in-log').text('Signed Out')
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
$('#sign-in-log').text('Password changed')
$('.change-password').val('')
}

const changePasswordFailure = () => {
  $('#sign-in-log').text('Password not changed')
  $('.change-password').val('')
}

module.exports = {
  success,
  failure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
