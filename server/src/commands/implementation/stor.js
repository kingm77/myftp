import { uploadFunction } from "./uploadFunction";

export function stor(socket, args){
    return uploadFunction(socket, args, "STOR")
}