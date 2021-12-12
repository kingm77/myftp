import { createServer } from "net";
import { actionOnData } from "./actionOnData";

export function launchDataServer(port) {
    const dataServer = createServer((socket) => {
        console.log("connection is started")
        socket.on("data", (data) => {
            const message = data.toString();
            const [command, ...dataOfCommand] = message.trim().split(" ");
            actionOnData[command](socket, dataOfCommand)
        });
      });
      
      dataServer.listen(port, () => {
        console.log(`Client data server started port ${port}`);
      });

      return dataServer
}