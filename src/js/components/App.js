var React = require('react')
var appActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')

function getAppState(){
    return {

    }
}

class App extends React.Component {
    getInitialState() {
        return getAppState()
    }

    componentDidMount() {
        AppStore.addChangeListerner(this._onChange)
    }

    componentUnmount() {
        AppStore.removeChangeListener(this._onChange)
    }

    render() {
        return(
            <div>
                Privately App
            </div>
        )
    }

    _onChange() {
        this.setState(getAppState())
    }
}

module.exports = App