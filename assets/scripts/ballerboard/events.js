'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')



const onCreateBaller = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createballer(data)
    .then(onShowAllballers)
    .catch(ui.createballerFailure)
}

const onShowAllBallers = function (event) {
  console.log(event.target)
  api.showAllballers()
    .then(ui.showAllballersSuccess)
    .catch(ui.showAllballersFailure)
}

const addHandlers = function () {
  $('#create-baller').on('submit', onCreateballer)
  $('#show-all-ballers').on('click', onShowAllballers)
  $('#delete-baller').on('submit', onDeleteballer)
  $('#update-baller').on('submit', onUpdateballer)
  // $('.baller-board').on('click', '.card', onAddToMenu)
  // $('#show-menu-button').on('click', onShowMenu)
}

module.exports = {
  addHandlers
}
