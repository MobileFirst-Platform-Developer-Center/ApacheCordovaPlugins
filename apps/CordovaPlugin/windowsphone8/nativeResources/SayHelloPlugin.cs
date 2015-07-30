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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;

namespace Cordova.Extension.Commands 
{
    public class SayHelloPlugin : BaseCommand
    {
        public void sayHello(string options)
        {
            string optVal = null;
            try {
                optVal = JsonHelper.Deserialize<string[]>(options)[0];
            }
            catch (Exception) {
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "SayHelloPlugin signaled an error"));
            }

            if (optVal == null)
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Got null value as input"));
            }
            else
            {
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Hello " + optVal));
            }
        }
    }
}
