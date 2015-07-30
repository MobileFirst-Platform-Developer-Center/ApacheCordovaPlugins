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

function  wlCommonInit() {
	
}

function sayHello(){
	var name = $("#NameInput").val();
	
	if (WL.Client.getEnvironment() == WL.Environment.PREVIEW) {
		WL.SimpleDialog.show(
			"Cordova Plugin", "Please run the sample in either a Simulator/Emulator or physical device to see the response from the Cordova plug-in.", 
			[{text: "OK", handler: function() {WL.Logger.debug("Ok button pressed");}
			}]
		);
	} else {
		cordova.exec(sayHelloSuccess, sayHelloFailure, "SayHelloPlugin", "sayHello", [name]);	
	}
}

function sayHelloSuccess(data){
	WL.SimpleDialog.show(
		"Response from plug-in", data, 
		[{text: "OK", handler: function() {WL.Logger.debug("Ok button pressed");}
		}]
	);
}

function sayHelloFailure(data){
	WL.SimpleDialog.show(
		"Response from plug-in", data, 
		[{text: "OK", handler: function() {WL.Logger.debug("Ok button pressed");}
		}]
	);
}