var React = require('react')
var appActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')

function getAppState(){
    return {

    }
}

class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = getAppState()
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange)
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