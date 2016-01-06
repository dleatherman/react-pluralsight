"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>About Page</h1>
          <p>React, React Router, and Flux for Ultra-responsive webapps</p>
        </div>
      </div>
    )
  }
});

module.exports = About;