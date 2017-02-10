cordova.define("com.paytm.cordova.paytm", function(require, exports, module) {
var exec = require('cordova/exec');
var PLUGIN_NAME = 'PayTM';

var PayTM = {
    startPayment: function(orderId, customerId, email, phone, amount, method, successCallback, failureCallback) {
    exec(successCallback,
                 failureCallback, 
                 "PayTM",
                 "startPayment",
                 [orderId, customerId, email, phone, amount, method]);
  }

};

module.exports = PayTM;

});