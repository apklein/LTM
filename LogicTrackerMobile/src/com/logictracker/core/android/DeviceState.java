package com.logictracker.core.android;

import android.content.Context;
import android.telephony.TelephonyManager;

public class DeviceState {

	private TelephonyManager	tm	= null;

	private DeviceState() {
	}

	private DeviceState(Context ctx) {
		this.tm = (TelephonyManager) ctx.getSystemService(Context.TELEPHONY_SERVICE);
	}

	public static DeviceState getInstanceFor(Context ctx) {
		return new DeviceState(ctx);
	}

	public String getIMEI() {
		String device_id = tm.getDeviceId();
		return device_id;
	}

	public String getLine1Number() {
		return tm.getLine1Number();
	}
}
