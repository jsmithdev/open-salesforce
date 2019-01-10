# DEPRECATED

This complimented the [ForceCode](https://github.com/celador/ForceCode) extension but development picked up on that repo and these things are now features of ForceCode. If you can't / don't want to go full SFDX in your SF development, ForceCode is a great tool. Please go install/update that and remove this if installed. 

The rest is left for educational, history, etc. purposes.

---

# Open SalesForce

This is a VS Code extension which adds two commands to your Command Palette:

Open SalesForce : Opens chrome and auto-logins you in, placing you at the setup menu of the Salesforce instance that your workspace is connected to.

Open VisualForce : Opens the VisualForce page you currently have in your editor.

It can do this by using the credentials that are already present in the force.json file that is auto-generated on the root of your workspace by SalesForce extensions.

Salesforce security tokens can be 24 or 25 in length <b>and</b> are combined to your password in the force.json file so...

#### If this doesn't auto-log you in, it probably means your token is 25 in length
You can add your  `token: value`  if you know it OR you can put `25` in you force.json file:

`"token": "jYnNYYANFeuvYX8OueH3bN6Q1"`

OR

`"token": "25"`


## Installing
[Published Free on the Market Place](https://marketplace.visualstudio.com/items?itemName=JamieSmith.open-salesforce)


## Dev
[On GitHub](https://github.com/dubyajaysmith/open-salesforce)


## License
All rights reserved.

MIT © [Jamie Smith](https://jamiesmiths.com)
