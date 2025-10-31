import {JSONRPCErrorType} from "../types/internal";

export default class JSONRPCError extends Error {
    private readonly _code: number;
    private readonly _data?: unknown;

    constructor(error: JSONRPCErrorType) {
        super(error.message);
        this.name = "JSONRPCError";
        this._code = error.code;
        this._data = error.data;
    }

    get code(): number {
        return this._code;
    }

    get data(): unknown {
        return this._data;
    }
}