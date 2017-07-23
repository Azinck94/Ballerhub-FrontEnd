'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')



const onCreateBaller = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createBaller(data)
    .then(onShowAllballers)
    .catch(ui.createBallerFailure)
}

const onShowAllBallers = function (event) {
  console.log(event.target)
  api.showAllballers()
    .then(ui.showAllballersSuccess)
    .catch(ui.showAllballersFailure)
}

const addHandlers = function () {
  $('#create-baller').on('submit', onCreateBaller)
  $('#ballers-list').on('click', onShowAllBallers)
  $('#delete-baller').on('submit', onDeleteBaller)
  $('#update-baller').on('submit', onUpdateBaller)
  // $('.baller-board').on('click', '.card', onAddToMenu)
  // $('#show-menu-button').on('click', onShowMenu)
}

module.exports = {
  addHandlers
}
