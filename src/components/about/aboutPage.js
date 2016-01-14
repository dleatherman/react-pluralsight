"use strict";

var React = require('react');

var About = React.createClass({
  // statics: {
  //   willTransitionTo: function(transition, params, query, callback) {
  //     if (!confirm('Are you sure you want to read a page that\s this boring?')) {
  //       transition.abort();
  //     } else {
  //       callback();
  //     }
  //   },
  //   willTransitionFrom: function(transition, component) {
  //     if (!confirm('Are you sure you want to leave a page that\s this exciting?')) {
  //       transition.abort();
  //     }
  //   }
  // },
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