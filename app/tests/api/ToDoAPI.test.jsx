var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(ToDoAPI).toExist();
    });
    describe('setTodos', () => {
        it('should set valid tools array', () => {
            var todos = [{
                id:23,
                text: 'test all files',
                completed: false
            }];
            ToDoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};
            ToDoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        })
    });
    describe('getTodos', () => {
        it('should return empty array for bad local storage data', () => {
            var actualTodos = ToDoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });
        it('should return todos if valid array in local storage', () => {
            var todos = [{
                id:23,
                text: 'test all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = ToDoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
});