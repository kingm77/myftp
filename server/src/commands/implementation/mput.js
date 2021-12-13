import { uploadFunction } from "./uploadFunction";

export function mput(socket, args){
    return uploadFunction(socket, args, "MPUT")
}