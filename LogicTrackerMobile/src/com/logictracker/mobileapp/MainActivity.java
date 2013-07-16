package com.logictracker.mobileapp;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

import com.example.logictrackermobile.R;
import com.logictracker.core.android.DeviceState;
import com.logictracker.core.android.phonegap.plugins.AppData;

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
		super.loadUrl(Config.getStartUrl());

	}
}
