# open-salesforce

This is a VS Code extension which opens the Salesforce instance that your workspace is connected to by using the force.json file on the root of your workspace.

## Requirements

Sadly Salesforce security tokens can be 24 or 25 in length. This assumes 24 for now. Hopefully there's a good way to figure it out dynamically (to remove. If not maybe it could be added to your workspace's force.json file (where this gets the Salesforce url and creds)