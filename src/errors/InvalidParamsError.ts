import {JSONRPCError} from "./JSONRPCError";

export class InvalidParamsError extends JSONRPCError {
    public constructor(methodName: string, params: any[]) {
        super(`Params '${params}' are invalid for '${methodName}' method`);
    }
}