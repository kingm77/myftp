import { messages } from "../../data/message"


export function pass(socket, args) {
    let password = args[0]
    if(socket.currentUser != undefined && socket.currentUser.password === password){
        socket.userAuthenticated = true
        socket.currentDir = process.cwd()
        return messages[230]
    }
    return messages[530]
}