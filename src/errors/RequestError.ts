import {RequestErrorType} from "../types/internal";
import {ResolvedFetchOptions} from "ofetch";

export default class RequestError extends Error {
    private readonly _error: Error;
    private readonly _request: RequestInfo;
    private readonly _options: ResolvedFetchOptions<"json">;

    constructor(error: RequestErrorType) {
        super(error.error.message);
        this._request = error.request;
        this._options = error.options;
        this._error = error.error;
    }

    get error(): Error {
        return this._error;
    }

    get request(): RequestInfo {
        return this._request;
    }

    get options(): ResolvedFetchOptions<"json"> {
        return this._options;
    }
}