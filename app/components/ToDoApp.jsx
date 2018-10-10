var React = require('react');

var ToDoList = require('ToDoList');

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
            ]
        }
    },
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <ToDoList todos={todos} />
            </div>
        );
    }
});

module.exports = ToDoApp;