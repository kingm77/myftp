import { launchClient } from "./client";

const [ipArgument, portArgument] = process.argv.slice(2)
launchClient(ipArgument, portArgument)