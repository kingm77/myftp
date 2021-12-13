import { safeTemplate } from "./safeTemplate";
import {glob} from "glob"
import path from "path";
import { retr } from "./retr";

export function mget(socket, args){
    return safeTemplate(socket, () => {
        args.forEach(element => {
            if(element.indexOf('*') === -1) retr(socket, [element])
            else
            {
               /** glob verifie les pattern en partant du répertoire courant du point de vue os */
               if(socket.currentDir != process.cwd())
                  element = path.join(socket.currentDir, element)
               glob(element, (er, files) => {
                   console.log(files)
                   mget(socket, files)
               })
            }
        });
        return ""
    })    
}