import {JSONRPCErrorType, SafeReturnType} from "./types/internal";
import {ofetch} from 'ofetch'
import {RequestError} from "./errors/RequestError";
import {JSONRPCError} from "./errors/JSONRPCError";
import {MethodNotFoundError} from "./errors/MethodNotFoundError";
import {InvalidParamsError} from "./errors/InvalidParamsError";

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
    id?: string | number | null
    result?: T
    error?: JSONRPCErrorType
}

export async function safeRequest<T>(url: string, method: string, params: any[] = []): Promise<SafeReturnType<T>> {
    let safeResult: SafeReturnType<T> = {
        success: false,
        error: {message: "Unknown error occurred"}
    }

    const response = await ofetch<JSONRPCResponse<T>>(url, {
        method: "POST",
        body: {
            jsonrpc: "2.0",
            method: method,
            params: params
        },
        ignoreResponseError: true,
    }).catch(error => {
        safeResult = {
            success: false,
            error: {message: error.message}
        }
    })

    if (response) {
        if (response.error) {
            safeResult = {
                success: false,
                error: response.error
            }
        } else if (response.result) {
            safeResult = {
                success: true,
                data: response.result
            }
        }
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
        ignoreResponseError: true,
        async onRequestError({request, options, error}) {
            throw new RequestError(request, options, error)
        },
    })

    if (response.error) {
        if (response.error.message == "Method not found" && response.error.code == -32601) {
            throw new MethodNotFoundError(method)
        } else if (response.error.message == "Invalid params" && response.error.code == -32602) {
            throw new InvalidParamsError(method, params)
        } else {
            throw new JSONRPCError(method, response.error.message, response.error.code)
        }
    }

    return response.result as T // if there are no errors thrown then result must be T
}