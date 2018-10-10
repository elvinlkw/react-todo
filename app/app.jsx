var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');   

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation(); 

//App css
require('style!css!sass!applicationStyles')

//most common ReactDOM method
ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('app')
);