import { createConnection } from "net";
import { createInterface } from "readline";
import { commands } from "./commands/command";
import { launchDataServer } from "./dataServer";

export function launchClient(host, port) {
    const client = createConnection({ host, port }, () => {
        console.log("client connected.");
    });

    client.on("ready", () => {
        /* initiate data connection with server with PORT command */
        const dataServerPort = client.localPort + 1
        const command = "PORT " + client.localAddress + " " + dataServerPort
        client.currentDir = process.cwd()
        client.dataConn = launchDataServer(client)
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
        const [command, ...args] = input.trim().split(" ");
        if(command in commands)
            console.log(commands[command].action(client, args))
        else  
            client.write(input)
    });

    rl.on("close", function saveInput() {
        console.log("\nBYE BYE !!!");
        process.exit(0);
    });
}