var React = require('react')
var appActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')
var SearchForm = require('./InputData.js')
var SearchResults = require('./Results.js')

function getAppState(){
    return {

    }
}

class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = getAppState()
        this._onChange = this._onChange.bind(this)
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
                <SearchForm />
                <SearchResults />
            </div>
        )
    }

    _onChange() {
        this.setState(getAppState())
    }
}

module.exports = App