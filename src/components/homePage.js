"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, React Router, and Flux for Ultra-responsive webapps</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
      </div>
    )
  }
});

module.exports = Home;