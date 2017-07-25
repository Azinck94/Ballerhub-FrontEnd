'use strict'

const config = require('../config.js')
const store = require('../store')
const app =require('../app.js')


const createBaller = (baller) => {
  console.log('create entry in api running')
  console.log(baller)
  const data = {
    baller: null
  }
  data.baller = baller
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

const deleteBaller = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/ballers/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBaller = (baller) => {
  console.log('update entry in api running')
  console.log(baller)
  const data = {
    baller: null
  }
  data.baller = baller
  return $.ajax({
    url: config.apiOrigin + '/ballers/' + baller.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const updateBaller = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/ballers/' + data.baller.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
module.exports = {
  createBaller,
  showAllBallers,
  deleteBaller,
  updateBaller
  // updateBaller
}
