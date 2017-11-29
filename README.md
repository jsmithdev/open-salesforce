# open-salesforce
This is a VS Code extension which opens chrome and auto-logins you into the Salesforce instance that your workspace is connected to by using the creds that are already present in the force.json file (auto-generated on the root of your workspace by SalesForce extensions).

Unfortunately, Salesforce security tokens can be 24 or 25 in length <b>and</b> are combined to your password in the force.json file so...

#### If this doesn't auto-log you in, it probably means your token is 25 in length
You can add your  `token: value`  if you know it or you can put `25` in you force.json file:

`"token": "jYnNYYANFeuvYX8OueH3bN6Q1"`

OR

`"token": "25"`


## Installing
[Published on the Market Place](https://marketplace.visualstudio.com/items?itemName=JamieSmith.open-salesforce)


## License
All rights reserved.

MIT © [Jamie Smith](https://jamiesmiths.com)
