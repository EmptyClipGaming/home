var AppDispatcher = require("../dispatchers/AppDispatcher");
var EventEmitter = require("events").EventEmitter;

var _ = require("underscore");
var Promise = require("bluebird");

var SessionConstants = require("../constants/SessionConstants");
var CHANGE_EVENT = "change";

var _session = null;

function login(userInfo) {
  return new Promise(function(resolve, reject) {
    resolve(null);
  });
}

function logout() {
  return new Promise(function(resolve, reject) {
    resolve(null);
  });
}

function refresh() {
  return new Promise(function(resolve, reject) {
    resolve(null);
  });
}

var SessionStore = _.extend({}, EventEmitter.prototype, {

  session: function() {
    return _session || null;
  },

  user: function() {
    if (this.session())
      return _session.user || null;
    else
      return null;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var handler;
  switch (action.actionType) {
    case SessionConstants.SESSION_LOGIN:
      handler = login(action.userInfo);
      break;
    case SessionConstants.SESSION_LOGOUT:
      handler = logout();
      break;
    case SessionConstants.SESSION_REFRESH:
      handler = refresh();
      break;
  }

  handler
    .then(function(results) {
      console.log(results);
    })
    .catch(function(error) {
      console.error(error);
    });

  return true;
});

module.exports = SessionStore;