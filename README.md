# open-salesforce

This is a VS Code extension which opens chrome and auto-login to the Salesforce instance that your workspace is connected to by using the force.json file on the root of your workspace.

## Beta Installing
1) Download [the packaged extension](https://github.com/dubyajaysmith/open-salesforce/blob/master/open-salesforce-0.0.1.vsix)
2) Load it in VS Code like below:
![beta install](https://i.imgur.com/McQoQK9.png)

## State

This works by running a command to open chrome to a SalesForce url with creds as params to auto-login like this: 

```start chrome https://test.salesforce.com?un=<Project's User>&pw=<Project's Password minus Token>```

Unfortunately, Salesforce security tokens can be 24 or 25 in length <b>and</b> are combined to your password in the force.json file that generates on the root of your SalesForce projects. This assumes 24 for now, which has been working but obviously not ideal. Hopefully there's a good way to figure that out dynamically. If not perhaps the token alone could be added to your workspace's force.json file. Then this could get the length from there (where this gets the project's SalesForce URL and creds to auto-login already).

## License
All rights reserved.

MIT © [Jamie Smith](https://jamiesmiths.com)
