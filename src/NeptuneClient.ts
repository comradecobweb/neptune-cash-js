import {request, safeRequest} from "./requests";
import {
    Height,
    Network, Tip,
    TipAnnouncements,
    TipBody,
    TipDigest,
    TipHeader,
    TipKernel,
    TipProof
} from "./types/response-types";
import {SafeReturnType} from "./types/internal";

export default class NeptuneClient {
    private readonly url: string;

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

    public async safeTip(): Promise<SafeReturnType<Tip>> {
        return await safeRequest<Tip>(this.url, "chain_tip")
    }

    public async tip(): Promise<Tip> {
        return await request<Tip>(this.url, "chain_tip")
    }

    public async safeTipProof(): Promise<SafeReturnType<TipProof>> {
        return await safeRequest<TipProof>(this.url, "chain_tipProof")
    }

    public async tipProof(): Promise<TipProof> {
        return await request<TipProof>(this.url, "chain_tipProof")
    }

    public async safeTipKernel(): Promise<SafeReturnType<TipKernel>> {
        return await safeRequest<TipKernel>(this.url, "chain_tipKernel")
    }

    public async tipKernel(): Promise<TipKernel> {
        return await request<TipKernel>(this.url, "chain_tipKernel")
    }

    public async safeTipHeader(): Promise<SafeReturnType<TipHeader>> {
        return await safeRequest<TipHeader>(this.url, "chain_tipHeader")
    }

    public async tipHeader(): Promise<TipHeader> {
        return await request<TipHeader>(this.url, "chain_tipHeader")
    }

    public async safeTipBody(): Promise<SafeReturnType<TipBody>> {
        return await safeRequest<TipBody>(this.url, "chain_tipBody")
    }

    public async tipBody(): Promise<TipBody> {
        return await request<TipBody>(this.url, "chain_tipBody")
    }

    public async safeTipAnnouncements(): Promise<SafeReturnType<TipAnnouncements>> {
        return await safeRequest<TipAnnouncements>(this.url, "chain_tipAnnouncements")
    }

    public async tipAnnouncements(): Promise<TipAnnouncements> {
        return await request<TipAnnouncements>(this.url, "chain_tipAnnouncements")
    }
}