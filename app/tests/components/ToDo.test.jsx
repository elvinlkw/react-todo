var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDo', () => {
    it('should exist', () => {  
        expect(ToDo).toExist();
    });
    it('should render one component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'text1'
        }, {
            id:2,
            text: 'text2'
        }];
        var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var todosComponent = TestUtils.scryRenderedComponentsWithType(toDoList, ToDo);

        expect(todosComponent.length).toBe(todos.length);
    });
});