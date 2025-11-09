import JSONRPCError from "./JSONRPCError";

export default class InvalidParamsError extends JSONRPCError {
    constructor(methodName: string, params: any[]) {
        super(`Params '${params}' are invalid for '${methodName}' method`);
    }
}