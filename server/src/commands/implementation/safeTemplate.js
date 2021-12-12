import {messages} from "../../data/message"

export function safeTemplate(socket, action) {
    if(socket.userAuthenticated) 
    {
        try {
            return action()
        } catch (error) {
            return messages[501]
        }  
    }  
    return messages[530]
}