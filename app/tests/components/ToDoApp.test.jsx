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
    })
});
