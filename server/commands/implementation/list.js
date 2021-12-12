import { readdir } from "fs";
import { messages } from "../../data/message";
import { safeTemplate } from "./safeTemplate";

export function list(socket, args) {
    return safeTemplate(socket, () => { 
        readdir(socket.currentDir, (err, files) => {
              socket.dataConToClient.write(`LIST ${files}`)
          });
        return messages[250] 
    }) 
}