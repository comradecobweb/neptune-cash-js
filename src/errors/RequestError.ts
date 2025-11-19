import {ResolvedFetchOptions} from "ofetch";

export class RequestError extends Error {
    public constructor(request: RequestInfo, options: ResolvedFetchOptions<"json">, error: Error) {
        super(`${error.message} for '${request}', with body: ${options.body}`)
    }
}