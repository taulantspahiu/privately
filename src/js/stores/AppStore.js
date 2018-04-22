var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var AppAPI = require('../utils/appAPI.js')

var CHANGE_EVENT = 'change'
var _items = []

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emitChange(CHANGE_EVENT)
    },
    addChangeListener(callback) {
        this.on('change', callback)
    },
    removeChangeListener(callback){
        this.removeChangeListener('change', callback)
    }
})

AppDispatcher.register(function(payload){
    var action = payload.action
    switch(action.actionType){

    }

    return true
})

module.exports = AppStore