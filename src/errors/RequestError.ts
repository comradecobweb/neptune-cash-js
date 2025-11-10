import {ResolvedFetchOptions} from "ofetch";

export default class RequestError extends Error {
    constructor(request: RequestInfo, options: ResolvedFetchOptions<"json">, error: Error) {
        super(`${error.message} for '${request}', with body: ${options.body}`)
    }
}