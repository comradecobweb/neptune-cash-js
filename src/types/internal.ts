import {ResolvedFetchOptions} from "ofetch";

export interface JSONRPCErrorType {
    code: number
    message: string
    data?: unknown
}

export interface RequestErrorType {
    request: RequestInfo,
    options: ResolvedFetchOptions<"json">
    error: Error,
}