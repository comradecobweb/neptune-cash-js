import JSONRPCError from "./JSONRPCError";

export default class MethodNotFoundError extends JSONRPCError {
    constructor(methodName: string) {
        super(`Method '${methodName}' not found`);
    }
}