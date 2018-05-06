var React = require('react')
var AppActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')

class InputData extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.searchText = this.searchText.bind(this)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.searchText} className="well">
                    <div className="form-group">
                        <label>Search...</label>
                        <input type="text" className="form-control" ref="text" />
                    </div>
                </form>
            </div>
        )
    }

    

    searchText(e) {
        e.preventDefault()

        var search = {
            text: this.refs.text.value.trim()
        }

        AppActions.searchText(search)
    }
}

module.exports = InputData