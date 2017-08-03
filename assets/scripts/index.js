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
