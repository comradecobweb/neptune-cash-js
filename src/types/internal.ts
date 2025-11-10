export type SafeReturnType<T> = {
    data?: T,
    error?: JSONRPCErrorType | RequestErrorType,
}

export interface JSONRPCErrorType {
    code: number
    message: string
    data?: unknown
}

export interface RequestErrorType {
    message: string
}