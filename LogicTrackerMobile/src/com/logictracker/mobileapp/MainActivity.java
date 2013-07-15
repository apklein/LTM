package com.logictracker.mobileapp;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

import com.example.logictrackermobile.R;
import com.logictracker.core.android.DeviceState;
import com.simonmacdonald.prefs.AppPreferences;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.telephony.TelephonyManager;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setDefaultAppPreferences();
		super.init();
		super.loadUrl(Config.getStartUrl());

	}

	private void setDefaultAppPreferences() {
		Context ctx = appView.getContext();
		SharedPreferences sharedPrefs = PreferenceManager.getDefaultSharedPreferences(ctx);
		Editor editor = sharedPrefs.edit();
		editor.putString("Device.IMEI", DeviceState.getIMEI(this));
		editor.commit();
	}

}
