import { messages } from "../../data/message";
import { safeTemplate } from "./safeTemplate";
import { existsSync, readFileSync, statSync } from "fs";
import path from "path";

export function retr(socket, args){
    return safeTemplate(socket, () => {
        const file = args[0]
        const filePath = path.join(socket.currentDir, file)
        
        if(existsSync(filePath) && statSync(filePath).isFile()){
            if(socket.dataConToClient === undefined)
                return messages[425]

            socket.write(messages[150])
            socket.dataConToClient.write(`RETR ${file} ${readFileSync(filePath).toString('base64')}`)
            return messages[226]
        }

        return messages[550]   
    })
}