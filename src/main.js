"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
require('bootstrap/dist/js/bootstrap.bundle.min');
var Popper = require('popper.js');
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Page, Toolbar, Button } from 'react-onsenui'


Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
