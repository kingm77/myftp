import { messages } from "../../data/message"
import { safeTemplate } from "./safeTemplate"

export function pwd(socket, args){ 
    return safeTemplate(socket, () => { 
        return messages[257].replace('%s', socket.currentDir) 
    }) 
}