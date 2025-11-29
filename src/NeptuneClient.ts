import {request, safeRequest} from "./requests";
import {
    BlockBody,
    BlockDigests, BlockHeader,
    Height, IsBlockCanonical,
    Network, Block,
    BlockAnnouncements,
    BlockDigest,
    BlockKernel,
    BlockProof, BlockTransactionKernel, TipDigest, Tip, TipProof, TipKernel, TipHeader, TipBody, TipTransactionKernel,
    TipAnnouncements
} from "./types/response-types";
import {SafeReturnType} from "./types/internal";
import {BlockSelector} from "./types/argument-types";
import {Digest} from "./types/base-types";

export const DEFAULT_NEPTUNE_CASH_PORT = 9797
export const DEFAULT_XNT_PORT = 9897

export class NeptuneClient {
    private readonly url: string;

    /**
     * @description Creates an instance of the NeptuneClient class
     * @param hostName RPC server's hostname (optional, default `localhost`)
     * @param port RPC server's port (optional, default `9797` (change to `9897` for the XNT))
     */
    public constructor(hostName: string = 'localhost', port: number = DEFAULT_NEPTUNE_CASH_PORT) {
        this.url = `http://${hostName}:${port}/`
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeNetwork(): Promise<SafeReturnType<Network>> {
        return await safeRequest<Network>(this.url, "node_network")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async network(): Promise<Network> {
        return await request<Network>(this.url, "node_network")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeHeight(): Promise<SafeReturnType<Height>> {
        return await safeRequest<Height>(this.url, "chain_height")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async height(): Promise<Height> {
        return await request<Height>(this.url, "chain_height")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTipDigest(): Promise<SafeReturnType<TipDigest>> {
        return await safeRequest<TipDigest>(this.url, "chain_tipDigest")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tipDigest(): Promise<TipDigest> {
        return await request<TipDigest>(this.url, "chain_tipDigest")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTip(): Promise<SafeReturnType<Tip>> {
        return await safeRequest<Tip>(this.url, "chain_tip")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tip(): Promise<Tip> {
        return await request<Tip>(this.url, "chain_tip")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTipProof(): Promise<SafeReturnType<TipProof>> {
        return await safeRequest<TipProof>(this.url, "chain_tipProof")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tipProof(): Promise<TipProof> {
        return await request<TipProof>(this.url, "chain_tipProof")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTipKernel(): Promise<SafeReturnType<TipKernel>> {
        return await safeRequest<TipKernel>(this.url, "chain_tipKernel")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tipKernel(): Promise<TipKernel> {
        return await request<TipKernel>(this.url, "chain_tipKernel")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTipHeader(): Promise<SafeReturnType<TipHeader>> {
        return await safeRequest<TipHeader>(this.url, "chain_tipHeader")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tipHeader(): Promise<TipHeader> {
        return await request<TipHeader>(this.url, "chain_tipHeader")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTipBody(): Promise<SafeReturnType<TipBody>> {
        return await safeRequest<TipBody>(this.url, "chain_tipBody")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tipBody(): Promise<TipBody> {
        return await request<TipBody>(this.url, "chain_tipBody")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTipTransactionKernel(): Promise<SafeReturnType<TipTransactionKernel>> {
        return await safeRequest<TipTransactionKernel>(this.url, "chain_tipTransactionKernel")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tipTransactionKernel(): Promise<TipTransactionKernel> {
        return await request<TipTransactionKernel>(this.url, "chain_tipTransactionKernel")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeTipAnnouncements(): Promise<SafeReturnType<TipAnnouncements>> {
        return await safeRequest<TipAnnouncements>(this.url, "chain_tipAnnouncements")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async tipAnnouncements(): Promise<TipAnnouncements> {
        return await request<TipAnnouncements>(this.url, "chain_tipAnnouncements")
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockDigest(blockSelector: BlockSelector): Promise<SafeReturnType<BlockDigest>> {
        return await safeRequest<BlockDigest>(this.url, "archival_getBlockDigest", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockDigest(blockSelector: BlockSelector): Promise<BlockDigest> {
        return await request<BlockDigest>(this.url, "archival_getBlockDigest", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockDigests(height: number): Promise<SafeReturnType<BlockDigests>> {
        return await safeRequest<BlockDigests>(this.url, "archival_getBlockDigests", [height])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockDigests(height: number): Promise<BlockDigests> {
        return await request<BlockDigests>(this.url, "archival_getBlockDigests", [height])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlock(blockSelector: BlockSelector): Promise<SafeReturnType<Block>> {
        return await safeRequest<Block>(this.url, "archival_getBlock", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlock(blockSelector: BlockSelector): Promise<Block> {
        return await request<Block>(this.url, "archival_getBlock", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockProof(blockSelector: BlockSelector): Promise<SafeReturnType<BlockProof>> {
        return await safeRequest<BlockProof>(this.url, "archival_getBlockProof", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockProof(blockSelector: BlockSelector): Promise<BlockProof> {
        return await request<BlockProof>(this.url, "archival_getBlockProof", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockKernel(blockSelector: BlockSelector): Promise<SafeReturnType<BlockKernel>> {
        return await safeRequest<BlockKernel>(this.url, "archival_getBlockKernel", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockKernel(blockSelector: BlockSelector): Promise<BlockKernel> {
        return await request<BlockKernel>(this.url, "archival_getBlockKernel", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockHeader(blockSelector: BlockSelector): Promise<SafeReturnType<BlockHeader>> {
        return await safeRequest<BlockHeader>(this.url, "archival_getBlockHeader", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockHeader(blockSelector: BlockSelector): Promise<BlockHeader> {
        return await request<BlockHeader>(this.url, "archival_getBlockHeader", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockBody(blockSelector: BlockSelector): Promise<SafeReturnType<BlockBody>> {
        return await safeRequest<BlockBody>(this.url, "archival_getBlockBody", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockBody(blockSelector: BlockSelector): Promise<BlockBody> {
        return await request<BlockBody>(this.url, "archival_getBlockBody", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockTransactionKernel(blockSelector: BlockSelector): Promise<SafeReturnType<BlockTransactionKernel>> {
        return await safeRequest<BlockTransactionKernel>(this.url, "archival_getBlockTransactionKernel", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockTransactionKernel(blockSelector: BlockSelector): Promise<BlockTransactionKernel> {
        return await request<BlockTransactionKernel>(this.url, "archival_getBlockTransactionKernel", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeGetBlockAnnouncements(blockSelector: BlockSelector): Promise<SafeReturnType<BlockAnnouncements>> {
        return await safeRequest<BlockAnnouncements>(this.url, "archival_getBlockAnnouncements", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async getBlockAnnouncements(blockSelector: BlockSelector): Promise<BlockAnnouncements> {
        return await request<BlockAnnouncements>(this.url, "archival_getBlockAnnouncements", [blockSelector])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async safeIsBlockCanonical(digest: Digest): Promise<SafeReturnType<IsBlockCanonical>> {
        return await safeRequest<IsBlockCanonical>(this.url, "archival_isBlockCanonical", [digest])
    }

    /**
     * @since neptune-core 0.5.0
     * @since xnt-core 0.1.0
     */
    public async isBlockCanonical(digest: Digest): Promise<IsBlockCanonical> {
        return await request<IsBlockCanonical>(this.url, "archival_isBlockCanonical", [digest])
    }
}