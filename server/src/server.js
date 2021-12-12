import { createServer } from "net";
import { commands} from "../commands/command";
import { messages } from "../data/message";

export function launch(port) {
  const server = createServer((socket) => {
    socket.on("end", () => {
      console.log(`session of user ${socket.currentUser.username} is ended`)
    })
    
    socket.on("data", (data) => {
      const [command, ...args] = data.toString().trim().split(" ");
      if(command in commands)
         socket.write(commands[command].action(socket, args))
      else 
        socket.write(messages[500])
    });
    socket.write(messages[220]);
  });

  server.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
}