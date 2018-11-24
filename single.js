#!/usr/bin/env node
var Cabal = require('cabal-core')
var swarm = require('cabal-core/swarm.js')

var rootdir = './archives/'

var key = '[KEY]'
var message = 'yeah'
var timeout = 1000
var channel = 'testpub'
var type = 'chat/text'
var db = rootdir + key

function publishSingleMessage ({channel, message, messageType, timeout}) {
  console.log('Publishing message to channel - ' + channel + ': "' + message + '"...')
  cabal.publish({
    type: messageType || 'chat/text',
    content: {
      channel: channel || 'default',
      text: message
    }
  })
  swarm(cabal)
  setTimeout(function () { process.exit(0) }, timeout || 5000)
}

var cabal = Cabal(db, key)

cabal.db.ready(function () {

publishSingleMessage({
    channel: channel,
    message: message,
    messageType: type,
    timeout: timeout
  })
  return


})

