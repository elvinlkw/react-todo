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
                    text: 'walk the dog',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'wash dishes',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'walk the person',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'sleep the person',
                    completed: false
                }
            ],
            showCompleted: false,
            searchText: ''
        }
    },
    handleToggle: function(id){
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }

            return todo;
        });
        this.setState({todos: updatedTodos});
    },
    handleAddToDo: function(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
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
                <ToDoList todos={todos} onToggle={this.handleToggle}/>
                <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
        );
    }
});

module.exports = ToDoApp;