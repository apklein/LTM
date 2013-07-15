navigator.notification.alert("beforeDefine", null,
		'Your2...', 'Great2!');

cordova.define("cordova/plugin/applicationpreferences", function(require, exports, module) {
	var exec = require("cordova/exec");
	var AppPreferences = function () {};
	
	var AppPreferencesError = function(code, message) {
	    this.code = code || null;
	    this.message = message || '';
	};
	
	AppPreferencesError.NO_PROPERTY = 0;
	AppPreferencesError.NO_PREFERENCE_ACTIVITY = 1;
	
	AppPreferences.prototype.get = function(key,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","get",[key]);
	};
	
	AppPreferences.prototype.set = function(key,value,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","set",[key, value]);
	};
	
	AppPreferences.prototype.load = function(success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","load",[]);    
	};
	
	AppPreferences.prototype.show = function(activity,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","show",[activity]);    
	};
	
	AppPreferences.prototype.clear = function(success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","clear", []);    
	};
	
	AppPreferences.prototype.remove = function(keyToRemove, success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","remove", [keyToRemove]);    
	};

	var appPreferences = new AppPreferences();
	module.exports = appPreferences;
});

if (!window.plugins) {
    window.plugins = {};
}
navigator.notification.alert("before", null,
		'Your2...', 'Great2!');

if (!window.plugins.applicationPreference) {
    window.plugins.applicationPreference = cordova.require("cordova/plugin/applicationpreferences");
	navigator.notification.alert(window.plugins.applicationPreference, null,
			'Your...', 'Great!');
} else {
	navigator.notification.alert("Error", null,
			'Your...', 'Great!');
	
	
}
