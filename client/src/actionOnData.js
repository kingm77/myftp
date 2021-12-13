import { Buffer } from "buffer"
import { readFileSync, writeFileSync, existsSync, statSync } from "fs"
import {glob} from "glob"
import path from "path"

export const actionOnData = {
    "LIST": function (socket, client, data) {
        console.log(data.join().replaceAll(',', '\n'))
    },
    "RETR": function (socket, client, data) {
        const [file, messageData] = data
        const filename = path.basename(file)
        const fileData = Buffer.from(messageData, 'base64').toString()
        const filePath = path.join(client.currentDir, filename)
        writeFileSync(filePath, fileData)
    },
    "STOR": function (socket, client, data) {
        const file = path.basename(data[0])
        const filePath = path.join(client.currentDir, file)
        console.log(filePath)
        if (existsSync(filePath) && statSync(filePath).isFile())
            socket.write(`${file} ${readFileSync(filePath).toString('base64')}`)
        else
            console.log(`${file} not found`)
    },
    "MPUT": function (socket, client, data) {
        data.forEach(element => {
            if (element.indexOf('*') === -1) this.STOR(socket, client, [element])
            else {
                /** glob verifie les pattern en partant du répertoire courant du point de vue os */
                if(client.currentDir != process.cwd())
                   element = path.join(client.currentDir, element)
                glob(element, (er, files) => {
                    this.MPUT(socket, client, files) 
                })
            }
        });
        return ""
    }
}