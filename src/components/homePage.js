"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('./common/header');

var Home = React.createClass({

	
	render: function() {
		return (
			<div>
				<Header/>
				<div className="jumbotron">
					<h1>Pluralsight Administration</h1>
					<p>React, React Router, and Flux for ultra-responsive web apps.</p>
					<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
				</div>
			</div>
		);
	}
});

module.exports = Home;