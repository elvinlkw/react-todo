var React = require('react');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                }, {
                    id: 2,
                    text: 'wash dishes'
                }, {
                    id: 3,
                    text: 'walk the person'
                }, {
                    id: 4,
                    text: 'sleep the person'
                }
            ],
            showCompleted: false,
            searchText: ''
        }
    },
    handleAddToDo: function(text){
        alert('new todo: ' + text);
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={todos} />
                <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
        );
    }
});

module.exports = ToDoApp;