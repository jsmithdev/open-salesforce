/* jshint asi: true, esversion: 6, laxcomma: true */
const vscode = require('vscode')
const jsonfile = require('jsonfile')
const activate = (context) => {

    let LoggedBool = false,
        Browser = `chrome`,
        URL = ''
    ;

    const runSalesForce = () => {
        return new Promise((resolve, reject) => {
            vscode.workspace.findFiles('force.json').then(x => {

                const filePath = x[0].fsPath

                jsonfile.readFile(filePath, (err, obj) => {
                    if (err) {
                        reject(err)
                    }
                    
                    //If token is 25 or token length is 25, sub 25
                    let sub = obj.token === 25 ? obj.token : obj.token.length
                    //If sub not 25, sub (read assume) 24
                    sub = sub === 25 ? 25 : 24
                    
                    URL = obj.url

                    const un = obj.username,
                        pw = String(obj.password).substring(0, obj.password.length - sub),
                        path = `${URL}?un=${un}&pw=${pw}`,
                        exec = require('child_process').exec;

                    switch (process.platform) {
                        case 'win32': {
                            const cmd = Browser ?
                                `start ${Browser} "${path}"` : `start "" "${path}"`
                            exec(cmd)
                            break
                        }
                        case 'darwin': {
                            const cmd = Browser ?
                                `open "${path}" -a "${Browser}"` : `open "${path}"`
                            exec(cmd)
                            break
                        }
                        default: {
                            const cmd = Browser ?
                                `${Browser} "${path}"` : `xdg-open "${path}"`
                            exec(cmd)
                            break
                        }
                    }

                    LoggedBool = true
                    resolve(LoggedBool)
                })
            })
        })
    }

    const runVisualForce = () => {
        
        const editor = vscode.window.activeTextEditor,
            f = editor.document.fileName,
            name = f.substring(f.lastIndexOf('\\') + 1, f.lastIndexOf('.page')),
            path = `${URL}\\apex\\${name}`,
            exec = require('child_process').exec
        ;

        switch (process.platform) {
            case 'win32': {
                const cmd = Browser ?
                    `start ${Browser} "${path}"` : `start "" "${path}"`
                exec(cmd)
                break
            }
            case 'darwin': {
                const cmd = Browser ?
                    `open "${path}" -a "${Browser}"` : `open "${path}"`
                exec(cmd)
                break
            }
            default: {
                const cmd = Browser ?
                    `${Browser} "${path}"` : `xdg-open "${path}"`
                exec(cmd)
                break
            }
        }
    }

    const toast = (msg, n) => {
        vscode.window.setStatusBarMessage(msg, n)
    }
    
    const openSalesforce = vscode.commands.registerCommand('extension.openSalesforce', () => {
        runSalesForce()
            .then(x => toast('Opened Salesforce', 2000))
            .catch(x => toast(`Uh-oh: ${x}`, 2000))
    })

    const openVisualforce = vscode.commands.registerCommand('extension.openVisualforce', () => {
        
        if (!LoggedBool) {
            runSalesForce()
                .then(x => runVisualForce())
                .catch(x => toast(`Uh-oh: ${x}`, 2000))
        }
        else {
            runVisualForce()
        }
    })

    context.subscriptions.push(openSalesforce)
    context.subscriptions.push(openVisualforce)
}

exports.activate = activate;