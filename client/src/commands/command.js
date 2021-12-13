import { lcd } from "./implementation/lcd";
import { lls } from "./implementation/lls";
import { lpwd } from "./implementation/lpwd";

export const commands = {
    "lcd": {action: lcd, description: "Change the current working directory on the local host"},
    "lpwd": {action: lpwd, description: "Display the name of the current working directory on the local host"},
    "lls": {action: lls, description: "Lists working directory on the local host"}
}