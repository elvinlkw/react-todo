var React = require('react');

var ToDoSearch = React.createClass({
    handleSearch: function(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function() {
        return(
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search To Do" onSearch={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onSearch={this.handleSearch}/>
                        Show Completed To Dos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = ToDoSearch;