import path from "path";
import { existsSync, statSync } from "fs";

export function lcd(socket, args){
        const reachedDirectory = args[0]
        const newDir = path.join(socket.currentDir, reachedDirectory)
        if(existsSync(newDir) && statSync(newDir).isDirectory()){
            socket.currentDir = newDir
            return `new working directory is ${socket.currentDir}`
        }
        return `not found directory ${newDir}`
}