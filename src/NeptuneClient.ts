import {request, safeRequest} from "./requests";
import {Height, Network, TipAnnouncements, TipDigest} from "./types/response-types";
import {SafeReturnType} from "./types/internal";

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

    public async safeHeight(): Promise<SafeReturnType<Height>> {
        return await safeRequest<Height>(this.url, "chain_height")
    }

    public async height(): Promise<Height> {
        return await request<Height>(this.url, "chain_height")
    }

    public async safeTipDigest(): Promise<SafeReturnType<TipDigest>> {
        return await safeRequest<TipDigest>(this.url, "chain_tipDigest")
    }

    public async tipDigest(): Promise<TipDigest> {
        return await request<TipDigest>(this.url, "chain_tipDigest")
    }

    public async safeTipAnnouncements(): Promise<SafeReturnType<TipAnnouncements>> {
        return await safeRequest<TipAnnouncements>(this.url, "chain_tipAnnouncements")
    }

    public async tipAnnouncements(): Promise<TipAnnouncements> {
        return await request<TipAnnouncements>(this.url, "chain_tipAnnouncements")
    }
}