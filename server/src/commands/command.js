import { cwd } from "./implementation/cwd"
import { help } from "./implementation/help"
import { list } from "./implementation/list"
import { pass } from "./implementation/pass"
import { port } from "./implementation/port"
import { pwd } from "./implementation/pwd"
import { quit } from "./implementation/quit"
import { retr } from "./implementation/retr"
import { stor } from "./implementation/stor"
import { user } from "./implementation/user"

export const commands = {
    "USER": {action: user, description: "Authentication username"},
    "PASS": {action: pass, description: "Authentication password"},
    "LIST": {action: list, description: "List the current directory of the server"},
    "CWD":  {action: cwd, description: "Change the current directory of the server"},
    "RETR": {action: retr, description: "Transfer a copy of the file FILE from the server to the client"},
    "STOR": {action: stor, description: "Transfer a copy of the file FILE from the client to the server"},
    "QUIT": {action: quit, description: "Close the connection and stop the program"},
    "PWD":  {action: pwd, description: "Display the name of the current directory of the server"},
    "PORT": {action: port, description: "Specifies an address and port to which the server should connect"},
    "HELP": {action: help, description: "send helpful information to the client"} 
}