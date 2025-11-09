import {JSONRPCErrorType, SafeReturnType} from "./types/internal";
import { ofetch } from 'ofetch'
import RequestError from "./errors/RequestError";
import JSONRPCError from "./errors/JSONRPCError";

// BigInt serialization
declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () {
    return Number(this);
};

type JSONRPCResponse<T> = {
    jsonrpc: "2.0"
    id?: string | number
    result?: T
    error?: JSONRPCErrorType
}

export async function safeRequest<T>(url: string, method: string, params: any[] = []): Promise<SafeReturnType<T>> {
    const safeResult: SafeReturnType<T> = {
        data: undefined,
        error: undefined,
    }

    const response = await ofetch<JSONRPCResponse<T>>(url, {
        method: "POST",
        body: {
            jsonrpc: "2.0",
            method: method,
            params: params
        },
        async onRequestError({request, options, error}) {
            safeResult.error = {request, options, error}
        },
    })

    if (response.error) {
        safeResult.error = response.error
    }
    if (response.result) {
        safeResult.data = response.result
    }

    return safeResult
}

export async function request<T>(url: string, method: string, params: any[] = []): Promise<T> {
    const response = await ofetch<JSONRPCResponse<T>>(url, {
        method: "POST",
        body: {
            jsonrpc: "2.0",
            method: method,
            params: params
        },
        async onRequestError({request, options, error}) {
            throw new RequestError({request, options, error})
        },
    })

    if (response.error) {
        throw new JSONRPCError(response.error)
    }

    return response.result as T // if there are no errors thrown then result must be T
}