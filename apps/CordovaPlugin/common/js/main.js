/*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.
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