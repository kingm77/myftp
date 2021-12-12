import { messages } from "../../data/message";
import {usersList} from "../../data/users"

export function user(socket, args){
    user = usersList.filter((elm) => elm.username === args[0])[0]
    if(user === undefined) return messages[530]
    socket.currentUser = user
    return messages[331]
}