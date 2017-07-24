'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')


// const onAddBaller = (event) => {
//   console.log('on addBaller invoked')
//   const data = getFormFields(this)
//   event.preventDefault()
//   addBaller(data)
//   .then(ui.addBallerSuccess)
//   .catch(ui.addBallerFail)
// }

const onCreateBaller = function (event) {
console.log('on createBaller invoked')
  const data = getFormFields(this)
  event.preventDefault()
  api.createBaller(data)
  onShowAllBallers(event)
}

const onShowAllBallers = function (event) {
  console.log('onShowAllBallers invoked')
  console.log(event.target)
  api.showAllBallers()
    .then(ui.showAllBallersSuccess)
    .catch(ui.showAllBallersFailure)
}
// const addBaller = (data) => {
//   console.log('create entry in api running')
//   console.log(data)
//   return $.ajax({
//     url: config.apiOrigin + '/ballers',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const onDeleteBaller = function (event) {
  console.log(deleted)
  const data = getFormFields(this)
event.preventDefault()
api.deleteBaller(data.baller.id)
  .then(onShowAllBallers)
  .catch(ui.deleteBallerFailure)
}

const addHandlers = function () {
  $('#create-baller-modal').on('submit', onCreateBaller)
  $('#ballers-list').on('click', onShowAllBallers)
  $('#delete-baller').on('submit', onDeleteBaller)
  // $('#update-baller').on('submit', onUpdateBaller)
  // $('.baller-board').on('click', '.card', onAddToMenu)
  // $('#show-menu-button').on('click', onShowMenu)
}

module.exports = {
  addHandlers
}
