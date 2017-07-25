'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateBaller = function (event) {
console.log('on createBaller invoked')
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createBaller(data)
  .then(onShowAllBallers)
  .catch(ui.createBallerFailure)
}

const onShowAllBallers = function (event) {
  console.log('onShowAllBallers invoked')
  console.log(event.target)
  api.showAllBallers()
    .then(ui.showAllBallersSuccess)
    .catch(ui.showAllBallersFailure)
}

const onDeleteBaller = function (event) {
  console.log('delete is working')
  const data = getFormFields(event.target)
event.preventDefault()
api.deleteBaller(data.baller.id)
  onShowAllBallers(event)
//   .catch(ui.deleteBallerFailure)
}

const onUpdateBaller = function (event) {
  console.log('update is working')
  const data = getFormFields(event.target)
  console.log(data)
  event.preventDefault()
  api.updateBaller(data)
    .then(onShowAllBallers)
     .catch(ui.updateBallerFailure)
}

const addHandlers = function () {
  $('#create-baller-modal').on('submit', onCreateBaller)
  $('#ballers-list').on('click', onShowAllBallers)
  $('#delete-baller').on('submit', onDeleteBaller)
  $('#update-baller').on('submit', onUpdateBaller)
  // $('.baller-board').on('click', '.card', onAddToMenu)
  // $('#show-menu-button').on('click', onShowMenu)
}

module.exports = {
  addHandlers
}
