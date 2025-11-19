import {JSONRPCError} from "./JSONRPCError";

export class MethodNotFoundError extends JSONRPCError {
    public constructor(methodName: string) {
        super(`Method '${methodName}' not found`);
    }
}