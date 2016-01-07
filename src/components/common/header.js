"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <a className="navbar-brand" href="/#">React Pluralsight</a>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#authors">Authors</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;