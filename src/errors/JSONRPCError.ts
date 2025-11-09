export default class JSONRPCError extends Error {
    constructor(message: string, methodName?: string,  code?: number) {
        if (methodName || code){
            super(`method '${methodName}' failed, message: '${message}', code: ${code}`)
        }else {
            super(message)
        }
    }
}