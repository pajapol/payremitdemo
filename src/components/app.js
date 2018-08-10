/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');


var App = React.createClass({
	render: function() {
		return (
			<div>
				
				
					<RouteHandler/>
				
			</div>
		);
	}
});

module.exports = App;