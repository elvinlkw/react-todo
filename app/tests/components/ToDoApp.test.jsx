var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
    it('should exist', () => {
        expect(ToDoApp).toExist();
    });
    it('should add to do to the todos state on HandleAddToDo', () => {
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddToDo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
        todoApp.setState({todos: [todoData]});
        
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});
