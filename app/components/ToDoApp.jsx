var React = require('react');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog'
                }, {
                    id: uuid(),
                    text: 'wash dishes'
                }, {
                    id: uuid(),
                    text: 'walk the person'
                }, {
                    id: uuid(),
                    text: 'sleep the person'
                }
            ],
            showCompleted: false,
            searchText: ''
        }
    },
    handleAddToDo: function(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
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