'use strict'
const store = require('../store')
const showBallers = require('../templates/baller-database.handlebars')
// const showMenuTemplate = require('../templates/show-menu.handlebars')
const createBallerSuccess = (data) => {}

const createBallerFailure = () => {}

const showAllBallersSuccess = (data) => {
  store.ballers = data.ballers
  $('.baller-board').empty()
  $('.create-baller').val('')
  // $('#create-baller-modal').modal('hide')
  let showBallersHtml = showBallersTemp({
    ballers: data.ballers
  })
  $('.baller-board').append(showBallersHtml)
}
//find where baller board is used
