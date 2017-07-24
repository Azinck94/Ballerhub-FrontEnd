'use strict'
const store = require('../store')
const showBallersTemplate = require('../templates/baller-database.handlebars')
// const showMenuTemplate = require('../templates/show-menu.handlebars')
const createBallerSuccess = (data) => {
}

const createBallerFailure = (error) => {
  console.log(error)
}

const showAllBallersSuccess = (data) => {
  console.log('ui running')
  store.ballers = data.ballers
  $('p').empty()
  $('.create-baller').val('')
  $('#create-baller-modal').modal('hide')
  $('.delete-baller').val('')
$('#delete-baller-modal').modal('hide')
  // $('#create-baller-modal').modal('hide')
  let showBallersHtml = showBallersTemplate({
    ballers: data.ballers})
  $('p').append(showBallersHtml)

};
const showAllBallersFailure = () => {
}

const deleteBallerSuccess = () => {
}

const deleteBallerFailure = () => {
}
module.exports = {
  deleteBallerFailure,
  deleteBallerSuccess,
  showAllBallersSuccess,
  showAllBallersFailure,
  createBallerFailure,
  createBallerSuccess
}
//
// $('.delete-baller').val('')
//   $('#delete-baller-modal').modal('hide')
//find where baller board is used
