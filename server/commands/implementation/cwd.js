import path from "path";
import { existsSync, statSync } from "fs";
import { safeTemplate } from "./safeTemplate";
import { messages } from "../../data/message";

export function cwd(socket, args){
    return safeTemplate(socket, () => {
        const reachedDirectory = args[0]
        const newDir = path.join(socket.currentDir, reachedDirectory)
        if(existsSync(newDir) && statSync(newDir).isDirectory()){
            socket.currentDir = newDir
            return messages[250]
        }
        return messages[501]
    })
}