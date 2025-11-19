import JSONRPCError from "./JSONRPCError";

export default class MethodNotFoundError extends JSONRPCError {
    public constructor(methodName: string) {
        super(`Method '${methodName}' not found`);
    }
}