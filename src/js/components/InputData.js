var React = require('react')
var appActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')

class InputData extends React.Component {
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
        console.log('this', this)
        e.preventDefault()

        var search = {
            text: this.refs.text.value.trim()
        }

        AppActions.searchText(search)
    }
}

module.exports = InputData