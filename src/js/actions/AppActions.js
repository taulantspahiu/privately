var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var AppActions = {
    searchText(text) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_TEXT,
            search: search
        })
    }
}

module.exports = AppActions