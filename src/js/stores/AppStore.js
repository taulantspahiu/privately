var AppDispatcher = require('../dispatcher/AppDispatcher.js')
var AppConstants = require('../constants/AppConstants.js')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var AppAPI = require('../utils/appAPI.js')

var CHANGE_EVENT = 'change'

var _items = []
var searchText = ''

var AppStore = assign({}, EventEmitter.prototype, {
	setSearchText() {
		_searchText = search.text
	},
	emitChange() {
		this.emit(CHANGE_EVENT)
	},
	addChangeListener(callback) {
		this.on('change', callback)
	},
	removeChangeListener(callback) {
		this.removeListener('change', callback)
	}
})

AppDispatcher.register(function(payload){
	var action = payload.action
	switch(action.actionType){
		case AppConstants.SEARCH_TEXT:
			AppAPI.searchText(action.search)
			AppStore.setSearchText(action.search)
			AppStore.emit(CHANGE_EVENT)
			break;
	}
	return true
})

module.exports = AppStore