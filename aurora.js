var mkKRLfn = require("../mkKRLfn");
var request = require('request');
var DEFAULT_AUTH = "qBSMzd5ANyWfWaxLXkxzyMZiJNkgosVe";
var DEFAULT_HOST = '10.5.164.17:16021';
var endpoint = "/api/v1/";

makeRequest = function(options, callback) {
  request(options, function(error, response, body) {
    callback(error, response);
  }); 
};

add_user = function(host, callback) {
  var requestTokenOptions = {
    method: 'POST',
    url: 'http://' + host + endpoint + 'new'
  };
  makeRequest(requestTokenOptions, callback);
}

get_state_on = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/state/on'
  };
  makeRequest(requestTokenOptions, callback);
}

put_state_on = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"on" : {"value":true}}'
  };
  makeRequest(requestTokenOptions, callback);
}

put_state_off = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"on" : {"value":false}}'
  };
  makeRequest(requestTokenOptions, callback);
}

/*
write = function(body) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + '/api/v1/' + auth + '/effects',
    body: body
  };
}
*/


var fns = {
  isOn: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    get_state_on(args.host.toString(), args.auth.toString(), callback);
  }),
};

var actns = {
  addUser: mkKRLfn(["host"] , function(args, ctx , callback) {
    add_user(args.host.toString(), callback);
  }),
  turnOn: mkKRLfn(["host", "auth"] , function(args, ctx , callback) {
    put_state_on(args.host.toString(), args.auth.toString(), callback);
  }),
  turnOff: mkKRLfn(["host", "auth"] , function(args, ctx , callback) {
    put_state_off(args.host.toString(), args.auth.toString(), callback);
  }),
};

module.exports = function(core) {
  return {
    def: fns,
    actions: actns
  };
};