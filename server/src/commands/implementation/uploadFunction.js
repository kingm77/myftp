import { writeFileSync } from "fs";
import path from "path";
import { messages } from "../../data/message";
import { safeTemplate } from "./safeTemplate";

export function uploadFunction(socket, args, command){
    return safeTemplate(socket, () => {
        const file = args[0]
        if(socket.dataConToClient === undefined)
            return messages[425]
        
        socket.write(messages[150])
        socket.dataConToClient.write(`${command} ${file}`)
        socket.dataConToClient.on("data", (data) => {
            const message = data.toString();
            const [file, messageData] = message.split(" ")
            const filename = path.basename(file)
            const fileData = Buffer.from(messageData, 'base64').toString()
            const filePath = path.join(socket.currentDir, filename)
            writeFileSync(filePath, fileData)
        })
        return messages[226]
    })
}