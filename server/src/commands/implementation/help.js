import { messages } from "../../data/message"
import { commands } from "../command"

export function help(socket, args){
    let command = args[0]
    socket.write[messages[214]]
    if(command) return `${messages[214]} ${command} ${commands[command].description}`
    return `${messages[214]} ${Object.keys(commands).join().replaceAll(',', '\n')}`
}