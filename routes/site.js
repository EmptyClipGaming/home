var express = require('express');
var router = express.Router();
var React = require("react");
var ReactApplication = require("../app/main.jsx");
var Router = require("react-router");

/* GET home page. */
router.get('*', function(req, res) {

  Router.run(ReactApplication, req.url, function(Handler) {
    res.render('index', {application: React.renderToString(Handler(null))});
  });
});

module.exports = function(app) {
  app.use("/", router);
};