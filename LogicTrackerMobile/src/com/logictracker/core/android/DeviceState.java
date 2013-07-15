package com.logictracker.core.android;

import android.content.Context;
import android.telephony.TelephonyManager;

public class DeviceState {
	public static String getIMEI(Context context) {
		TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);

		String device_id = tm.getDeviceId();
		return device_id;

	}

}
