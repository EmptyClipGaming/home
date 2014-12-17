var React = require("react");
var ReactApplication = require("./app/main.jsx");
var Router = require("react-router");

Router.run(ReactApplication, Router.HistoryLocation, function(Handler) {
  React.render(Handler(null), document.getElementById("content"));
});