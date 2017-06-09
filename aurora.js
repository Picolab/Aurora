// DOCUMENTATION: http://forum.nanoleaf.me/docs/openapi

var mkKRLfn = require("../mkKRLfn");
var request = require('request');
var endpoint = "/api/v1/";

makeRequest = function(options, callback) {
  request(options, function(error, response, body) {
    callback(error, response);
  }); 
};

///////////////////////
/// USER MANAGEMENT ///
///////////////////////

add_user = function(host, callback) {
  var requestTokenOptions = {
    method: 'POST',
    url: 'http://' + host + endpoint + 'new'
  };
  makeRequest(requestTokenOptions, callback);
}

delete_user = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'DELETE',
    url: 'http://' + host + endpoint + auth
  };
  makeRequest(requestTokenOptions, callback);
}

//////////////////////////
/// AURORA INFORMATION ///
//////////////////////////

get_info = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth
  };
  makeRequest(requestTokenOptions, callback);
}

///////////////////////
/// TOGGLE ON - OFF ///
///////////////////////

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

//////////////////////
/// SET BRIGHTNESS ///
//////////////////////

get_brightness = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/state/brightness',
  };
  makeRequest(requestTokenOptions, callback);
}

set_brightness = function(host, auth, value, callback) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"brightness" : {"value":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

increase_brightness = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'increase_brightness' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"brightness" : {"increment":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

decrease_brightness = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'decrease_brightness' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"brightness" : {"increment":-' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

///////////////
/// SET HUE ///
///////////////

get_hue = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/state/hue',
  };
  makeRequest(requestTokenOptions, callback);
}

set_hue = function(host, auth, value, callback) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"hue" : {"value":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

increase_hue = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'increase_hue' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"hue" : {"increment":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

decrease_hue = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'decrease_hue' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"hue" : {"increment":-' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

//////////////////////
/// SET SATURATION ///
//////////////////////

get_saturation = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/state/sat',
  };
  makeRequest(requestTokenOptions, callback);
}

set_saturation = function(host, auth, value, callback) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"sat" : {"value":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

increase_saturation = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'increase_saturation' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"sat" : {"increment":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

decrease_saturation = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'decrease_saturation' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"sat" : {"increment":-' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

/////////////////////////////
/// SET COLOR TEMPERATURE ///
/////////////////////////////

get_color_temp = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/state/ct',
  };
  makeRequest(requestTokenOptions, callback);
}

set_color_temp = function(host, auth, value, callback) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"ct" : {"value":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

increase_color_temp = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'increase_color_temp' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"ct" : {"increment":' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

decrease_color_temp = function(host, auth, value, callback) {
  if (value.includes("-")) {
    callback(new Error("Function 'decrease_color_temp' expects positive value"));
    return;
  }
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/state',
    body: '{"ct" : {"increment":-' + value + '}}'
  };
  makeRequest(requestTokenOptions, callback);
}

//////////////////////
/// GET COLOR MODE ///
//////////////////////

color_mode = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/state/colorMode',
  };
  makeRequest(requestTokenOptions, callback);
}

//////////////////////
/// SELECT EFFECTS ///
//////////////////////

get_effect = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/effects/select',
  };
  makeRequest(requestTokenOptions, callback);
}

select_effect = function(host, auth, value, callback) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + endpoint + auth + '/effects',
    body: '{"select" : ' + value + '}'
  };
  makeRequest(requestTokenOptions, callback);
}

list_effects = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/effects/effectsList',
  };
  makeRequest(requestTokenOptions, callback);
}

/////////////////////
/// WRITE EFFECTS ///
/////////////////////









////////////////////
/// PANEL LAYOUT ///
////////////////////

panel_orientation = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/panelLayout/globalOrientation',
  };
  makeRequest(requestTokenOptions, callback);
}

panel_layout = function(host, auth, callback) {
  var requestTokenOptions = {
    method: 'GET',
    url: 'http://' + host + endpoint + auth + '/panelLayout/layout',
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
  getInfo: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    get_info(args.host.toString(), args.auth.toString(), callback);
  }),
  brightness: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    get_brightness(args.host.toString(), args.auth.toString(), callback);
  }),
  hue: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    get_hue(args.host.toString(), args.auth.toString(), callback);
  }),
  saturation: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    get_saturation(args.host.toString(), args.auth.toString(), callback);
  }),
  colorTemperature: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    get_color_temp(args.host.toString(), args.auth.toString(), callback);
  }),
  colorMode: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    color_mode(args.host.toString(), args.auth.toString(), callback);
  }),
  getEffect: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    get_effect(args.host.toString(), args.auth.toString(), callback);
  }),
  listEffects: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    list_effects(args.host.toString(), args.auth.toString(), callback);
  }),
  orientation: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    panel_orientation(args.host.toString(), args.auth.toString(), callback);
  }),
  layout: mkKRLfn(["host","auth"],function (args, ctx , callback) {
    panel_layout(args.host.toString(), args.auth.toString(), callback);
  }),
};

var actns = {
  addUser: mkKRLfn(["host"] , function(args, ctx , callback) {
    add_user(args.host.toString(), callback);
  }),
  deleteUser: mkKRLfn(["host","auth"] , function(args, ctx , callback) {
    delete_user(args.host.toString(), args.auth.toString(), callback);
  }),
  turnOn: mkKRLfn(["host", "auth"] , function(args, ctx , callback) {
    put_state_on(args.host.toString(), args.auth.toString(), callback);
  }),
  turnOff: mkKRLfn(["host", "auth"] , function(args, ctx , callback) {
    put_state_off(args.host.toString(), args.auth.toString(), callback);
  }),
  setBrightness: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    set_brightness(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  brighter: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    increase_brightness(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  darker: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    decrease_brightness(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  setHue: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    set_hue(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  increaseHue: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    increase_hue(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  decreaseHue: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    decrease_hue(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  setSaturation: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    set_saturation(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  saturate: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    increase_saturation(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  desaturate: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    decrease_saturation(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  setColorTemp: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    set_color_temp(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  warmer: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    increase_color_temp(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  colder: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    decrease_color_temp(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
  selectEffect: mkKRLfn(["host", "auth", "value"] , function(args, ctx , callback) {
    select_effect(args.host.toString(), args.auth.toString(), args.value.toString(), callback);
  }),
};

module.exports = function(core) {
  return {
    def: fns,
    actions: actns
  };
};