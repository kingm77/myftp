import { launch } from "./server";

const portArgument = process.argv.slice(2)[0]

launch(portArgument);
