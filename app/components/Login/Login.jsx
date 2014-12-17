var React = require('react');

var LoginForm = require("./LoginForm.jsx");

var Login = React.createClass({

  render: function() {
    return (
      <div className="row">
        <LoginForm />
      </div>
    );
  }

});

module.exports = Login;