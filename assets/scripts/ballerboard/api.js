'use strict'

const config = require('../config.js')
const store = require('../store')


const createballer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/ballers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllBallers = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/ballers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createBaller,
  showAllBallers,
  deleteBaller,
  updateBaller
}
