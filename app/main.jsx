var React = require("react");
var Router = require("react-router");

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Login = require("./components/Login/Login.jsx");

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <ul className="row">
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return <h1>Home</h1>;
  }
});

var Dashboard = React.createClass({
  render: function() {
    return <h1>Dashboard</h1>;
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="dashboard" handler={Dashboard} />
    <Route name="login" handler={Login} />
  </Route>
);

module.exports = routes;