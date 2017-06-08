var mkKRLfn = require("../mkKRLfn");
var request = require('request');

var auth = "qBSMzd5ANyWfWaxLXkxzyMZiJNkgosVe";
var host = '10.5.164.17:16021';

write = function(body) {
  var requestTokenOptions = {
    method: 'PUT',
    url: 'http://' + host + '/api/v1/' + auth + '/effects',
    body: body
  };
  request(requestTokenOptions, function(error, response, body) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }
  }); 
}


module.exports = function(core){    

return{
    def:{
        pinIntialized: mkKRLfn(["pin"],function (args, ctx , callback) {
              callback(null, !!pins[args.pin.toString()]);
        })
     },
     actions:{
     servoWrite: mkKRLfn(["pin","value"] , function(args, ctx , callback){  
               pin_str = args.pin.toString();       
                if (!pins[pin_str]) {
                      pins[pin_str] = new Gpio(args.pin, {mode: Gpio.OUTPUT});
                }
                callback(null,pins[pin_str].servoWrite(args.value));
        }),
     }
 }
};