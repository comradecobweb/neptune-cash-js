export type SafeReturnType<T> =
    {
        success: true,
        data: T
    } |
    {
        success: false,
        error: JSONRPCErrorType | RequestErrorType
    }

export interface JSONRPCErrorType {
    code: number
    message: string
    data?: unknown
}

export interface RequestErrorType {
    message: string
}