cordova.define("cordova/plugin/appdata", function(require, exports, module) {
	var exec = require("cordova/exec");
	var AppData = function() {
	};

	var AppDataError = function(code, message) {
		this.code = code || null;
		this.message = message || '';
	};

	AppDataError.NO_PROPERTY = 0;
	AppDataError.NO_PREFERENCE_ACTIVITY = 1;

	AppData.prototype.get = function(key, success, fail) {
		cordova.exec(success, fail, "AppData", "get", [ key ]);
	};

	AppData.prototype.set = function(key, value, success, fail) {
		cordova.exec(success, fail, "AppData", "set", [ key, value ]);
	};

	AppData.prototype.load = function(success, fail) {
		cordova.exec(success, fail, "AppData", "load", []);
	};

	AppData.prototype.show = function(activity, success, fail) {
		cordova.exec(success, fail, "AppData", "show", [ activity ]);
	};

	AppData.prototype.clear = function(success, fail) {
		cordova.exec(success, fail, "AppData", "clear", []);
	};

	AppData.prototype.remove = function(keyToRemove, success, fail) {
		cordova.exec(success, fail, "AppData", "remove", [ keyToRemove ]);
	};

	var appData = new AppData();
	module.exports = appData;
});

if (!window.plugins) {
	window.plugins = {};
}

if (!window.plugins.appData) {
	window.plugins.appData = cordova.require("cordova/plugin/appdata");
}