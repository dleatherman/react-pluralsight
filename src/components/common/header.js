"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <a className="navbar-brand" href="/#">React Pluralsight</a>
        <ul className="nav navbar-nav">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Header;