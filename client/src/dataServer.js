import { createServer } from "net";
import { actionOnData } from "./actionOnData";

export function launchDataServer(client) {
    const port = client.localPort + 1

    const dataServer = createServer((socket) => {
        console.log("connection is started")
        socket.on("data", (data) => {
            const message = data.toString();
            const [command, ...dataOfCommand] = message.trim().split(" ");
            actionOnData[command](socket, client, dataOfCommand)
        });
      });
      
      dataServer.listen(port, () => {
        console.log(`Client data server started port ${port}`);
      });

      return dataServer
}