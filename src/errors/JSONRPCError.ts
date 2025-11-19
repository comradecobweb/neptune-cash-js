export class JSONRPCError extends Error {
    public constructor(message: string, methodName?: string,  code?: number) {
        if (methodName || code){
            super(`method '${methodName}' failed, message: '${message}', code: ${code}`)
        }else {
            super(message)
        }
    }
}