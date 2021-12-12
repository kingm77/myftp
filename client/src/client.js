import { createConnection } from "net";
import { createInterface } from "readline";
import { launchDataServer } from "./dataServer";

export function launchClient(host, port) {

    const client = createConnection({ host, port }, () => {
        console.log("client connected.");
    });

    client.on("ready", () => {
        let dataServerPort = client.localPort + 1
        client.dataConn = launchDataServer(dataServerPort)
        let command = "PORT " + client.localAddress + " " + dataServerPort
        client.write(command)
    })

    client.on("data", (data) => {
        const message = data.toString();
        console.log("Message received:", message);
        const [status, ...args] = message.trim().split(" ");

        if (status === "221") {
            client.dataConn.close()
            client.end()
            rl.close()
        }
    });

    const rl = createInterface({
        input: process.stdin,
    });
    rl.on("line", (input) => {
        client.write(input)
    });

    rl.on("close", function saveInput() {
        console.log("\nBYE BYE !!!");
        process.exit(0);
    });
}