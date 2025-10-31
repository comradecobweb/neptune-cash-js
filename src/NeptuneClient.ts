import {request, safeRequest} from "./requests";
import {Network} from "./types/response-types";
import { SafeReturnType} from "./types/internal";

export default class NeptuneClient {
    private url: string;

    constructor(hostName: string = 'localhost', port: number = 9797) {
        this.url = `http://${hostName}:${port}/`
    }

    public async safeNetwork(): Promise<SafeReturnType<Network>> {
        return await safeRequest<Network>(this.url, "node_network")
    }

    public async network(): Promise<Network> {
        return await request<Network>(this.url, "node_network")
    }
}