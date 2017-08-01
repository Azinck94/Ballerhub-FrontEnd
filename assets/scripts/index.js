'use strict'

const setAPIOrigin = require('../../lib/set-api-origin.js')
const config = require('./config')
const getFormFields = require('../../lib/get-form-fields.js');
const authEvents = require('./user-authorization/events.js');
const ballerboardEvents = require('./ballerboard/events.js');

// const ballerEvents = require('./player-requests/events');

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  ballerboardEvents.addHandlers()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#baller-section').hide()
})
//button to hopefully end up adding a player that has been created to the user's team

 //$(document).on('click', '.add-baller-button', function(){
//   ballerboardEvents.onAddBaller(this.id);
// });

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
    authEvents.addHandlers();
    ballerboardEvents.addHandlers();
  // $('#select-sign-up').on('click', function(){
  //   $('#sign-up-modal').modal('show');
  });
  $('.sign-up-btn').on('click', function(){
    $('#sign-up').modal('hide');
  });
  $('#select-sign-in').on('click', function(){
    $('#sign-in-modal').modal('show');
  });
  $('.sign-in-btn').on('click', function(){
    $('#sign-in').modal('hide');
  });
  // $('#select-change-password').on('click', function(){
  //   $('#change-password').modal('show');
  // });
  $('.change-password-btn').on('click', function(){
    $('#change-password-modal').modal('hide');
 });
    $('.sign-out-btn').on('click', function(){
      $('#sign-out').modal('hide');
       });

require('./example')
