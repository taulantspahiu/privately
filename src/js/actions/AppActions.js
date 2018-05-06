var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var AppActions = {
    searchText(text) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_TEXT,
            search: text
        })
    },
    getResults(results) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.GET_RESULTS,
            results: results
        })
    }
}

module.exports = AppActions