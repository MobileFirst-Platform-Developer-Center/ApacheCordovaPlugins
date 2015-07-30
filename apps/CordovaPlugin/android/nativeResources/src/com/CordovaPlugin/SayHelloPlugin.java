/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

package com.CordovaPlugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class SayHelloPlugin extends CordovaPlugin {
	
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) 
			throws JSONException {
		if (action.equals("sayHello")){
			try {
				final String responseText = "Hello " + args.getString(0);
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {	        	
						callbackContext.success(responseText); // Thread-safe.
					}
				});
			} catch (JSONException e){
				callbackContext.error("Failed to parse parameters");
			}
			return true;
	    }
		return false;
	}
}
