var React = require('react');

var LoginForm = React.createClass({

  getInitialState: function() {
    return {
      error: null
    };
  },

  onLogin: function(event) {
    event.preventDefault();

    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();

    if (!email || !password) {
      return this.setState({error: "Invalid Email/Password combination!"});
    } else {
      this.setState({error: null});
    }

    //TODO: Finish me!
    this.refs.email.getDOMNode().value = '';
    this.refs.password.getDOMNode().value = '';
    return;
  },

  render: function() {
    return (
      <div className="col-sm-4 col-sm-offset-4">
        <section className="panel panel-default">
          <div className="panel-heading">Login</div>
          <main className="panel-body">
            {this.state.error ? 
              <div className="alert alert-danger" role="alert">{this.state.error}</div>
              :
              null
            }
            <form role="form" onSubmit={this.onLogin}>
              <div className="form-group">
                <input ref="email" type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <input ref="password" type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </main>
        </section>
      </div>
    );
  }

});

module.exports = LoginForm;