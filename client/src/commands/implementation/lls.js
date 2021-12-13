import { readdir } from "fs";

export function lls(client, args) {
    readdir(client.currentDir, (err, files) => {
        console.log(files.join().replaceAll(',', '\n'))
    });
    return ""
}