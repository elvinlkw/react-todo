var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
    it('should exist', () => {
        expect(AddToDo).toExist();
    });
    it('should call onAddToDo on valid data', ()=> {
        var todoText = 'check mail';
        var spy = expect.createSpy();
        var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todoText);
    });
    it('should not call onAddToDo on invalid data', ()=> {
        var todoText = '';
        var spy = expect.createSpy();
        var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled(todoText);
    });
});