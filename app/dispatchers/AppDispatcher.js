var Dispatcher = require("flux").Dispatcher;
var _ = require("underscore");

var AppDispatcher = _extend({}, new Dispatcher(), {

  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;