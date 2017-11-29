/* jshint asi: true, esversion: 6, laxcomma: true */
const vscode = require('vscode');
const jsonfile = require('jsonfile')
const activate = (context) => {

    const openSalesforce = vscode.commands.registerCommand('extension.openSalesforce', () => {

        vscode.workspace.findFiles('force.json').then(x => {
            
            const filePath = x[0].fsPath
            
            jsonfile.readFile(filePath, (err, obj) => {
                if(err){
                    console.error(err)
                }

                //If token is 25 or token length is 25, sub 25
                let sub = obj.token === 25 ? obj.token : obj.token.length
                //If sub not 25, sub 24
                sub = sub === 25 ? 25 : 24

                const url = obj.url,
                    un = obj.username,
                    pw = String(obj.password).substring(0, obj.password.length - sub),
                    browserName = `chrome`,
                    path = `${url}?un=${un}&pw=${pw}`,
                    exec = require('child_process').exec;

                switch (process.platform) {
                    case 'win32': {
                        const cmd = browserName ?
                            `start ${browserName} "${path}"` : `start "" "${path}"`
                        exec(cmd)
                        break
                    }
                    case 'darwin': {
                        const cmd = browserName ?
                            `open "${path}" -a "${browserName}"` : `open "${path}"`
                        exec(cmd)
                        break
                    }
                    default: {
                        const cmd = browserName ?
                            `${browserName} "${path}"` : `xdg-open "${path}"`
                        exec(cmd)
                        break
                    }
                }
            })
        })
    });

    context.subscriptions.push(openSalesforce);
}

exports.activate = activate;