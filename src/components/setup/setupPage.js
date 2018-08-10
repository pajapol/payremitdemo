"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var setupPage = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="card">	
							<div className="card-body">
								<p>Select Nationality</p>
								<button className="btn btn-primary btn-block">Filipino</button>
								<button className="btn btn-primary btn-block">Indian</button>
							</div>				
						</div>
					</div>
				</div>	
			</div>
		);
	}
});

module.exports = setupPage;