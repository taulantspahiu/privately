var Dispatcher = require('flux').Dispatcher
var assign = require('object-assign')

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction(action) {
        var payload = {
            source: 'VIEW_ACTION',
            action: action
        }
        this.dispatch(payload)
    }
})

module.export = AppDispatcher