// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const jsonfile = require('jsonfile')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    const openSalesforce = vscode.commands.registerCommand('extension.openSalesforce', function () {
        // The code you place here will be executed every time your command is executed

        vscode.workspace.findFiles('force.json').then(x => {
            
            let filePath = x[0].fsPath
            
            jsonfile.readFile(filePath, function (err, obj) {
                if (err){console.error(err)}

                const un = obj.username
                const pw = String(obj.password).substring(0, obj.password.length - 24)
                const url = obj.url

                const platform = process.platform;
                const browserName = 'chrome'
                const path = `${url}?un=${un}&pw=${pw}`

                const exec = require('child_process').exec;
                let cmd = ''

                switch (platform) {
                    case 'win32':
                        cmd = browserName
                            ? `start ${browserName} "${path}"`
                            : `start "" "${path}"`;
                        break;
                    case 'darwin':
                        cmd = browserName
                            ? `open "${path}" -a "${browserName}"`
                            : `open "${path}"`;
                        break;
                    default:
                        cmd = browserName
                            ? `${browserName} "${path}"`
                            : `xdg-open "${path}"`;
                        break;
                }

                exec(cmd, function (err, stdout, stderr) {
                    if (err) {
                        vscode.window.showErrorMessage(`Error: ${err}`);
                    }
                });

            })
        })
        .catch(x => console.error(x))
    });

    context.subscriptions.push(openSalesforce);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;