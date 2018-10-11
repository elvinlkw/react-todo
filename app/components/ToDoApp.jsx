var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: ToDoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        }
    },
    componentDidUpdate: function(){
        ToDoAPI.setTodos(this.state.todos);
    },
    handleToggle: function(id){
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
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
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
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
        var {todos, showCompleted, searchText} = this.state;
        
        var filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
        );
    }
});

module.exports = ToDoApp;