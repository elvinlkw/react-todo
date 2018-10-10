var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation(); 

//App css
require('style!css!sass!applicationStyles')

//most common ReactDOM method
ReactDOM.render(
    <p>BoiletPlate3 Proeject</p>,
    document.getElementById('app')
);