import { createConnection } from "net";
import { messages } from "../../data/message";

export function port(socket, args){
    socket.dataConToClient = createConnection({host: args[0], port:args[1]})
    return messages[200].replace('%s', "PORT")
}