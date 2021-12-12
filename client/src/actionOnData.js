import {Buffer} from "buffer"
import {readFileSync, writeFileSync, existsSync, statSync} from "fs"
import path from "path"

export const actionOnData = {
    "LIST": function(socket, data){
        console.log(data.join().replaceAll(',', '\n'))
    },
    "RETR": function(socket, data){
        const [file, messageData] = data
        const filename = path.basename(file)
        const fileData = Buffer.from(messageData, 'base64').toString()
        const filePath = path.join(process.cwd(),'fileDownloaded', filename)
        writeFileSync(filePath, fileData)
    },
    "STOR":function(socket, data){
        const file = data[0]
        const filePath = path.join(process.cwd(), file)
        if(existsSync(filePath) && statSync(filePath).isFile())
           socket.write(`${file} ${readFileSync(filePath).toString('base64')}`)
        else
            console.log("file not found") 
    }
}