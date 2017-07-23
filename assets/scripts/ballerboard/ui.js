'use strict'
const store = require('../store')
const showBallersTemplate = require('../templates/baller-database.handlebars')
// const showMenuTemplate = require('../templates/show-menu.handlebars')
const createBallerSuccess = (data) => {
}

const createBallerFailure = () => {
}
const showAllBallersSuccess = (data) => {
  store.ballers = data.ballers
  $('.create-baller').val('')
    $('#create-baller-modal').modal('hide')
    let showBallersHtml = showBallersTemplate({ ballers: data.ballers })
$('.baller-board').append(showBallersHtml)
}
//find where baller board is used
