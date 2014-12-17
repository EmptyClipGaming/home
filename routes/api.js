var express = require('express');
var router = express.Router();

module.exports = function(app) {

  router.route("/").get(function(req, res) {
    res.status(200).send({

    });
  });

  app.use("/api", router);

};