import {Digest} from "./base-types";

export interface Network {
    network: 'main' | 'alpha' | 'beta' | 'testnet' | 'regtest' // based on the result of neptune-core --help
}

export interface Height {
    height: number // u64
}

export interface BlockDigest {
    digest: Digest
}

export interface Block {
    block: BlockType
}

export interface BlockProof {
    proof: string | null
}

export interface BlockKernel {
    kernel: BlockKernelType
}

export interface BlockHeader {
    header: BlockHeaderType
}

export interface BlockBody {
    body: BlockBodyType
}

export interface BlockTransactionKernel {
    kernel: TransactionKernelType
}

export interface BlockAnnouncements {
    announcements: string[]
}

export interface BlockDigests {
    digests: Digest[]
}

export interface IsBlockCanonical {
    canonical: boolean
}



interface BlockType {
    kernel: BlockKernelType,
    proof: string
}



interface BlockKernelType {
    header: BlockHeaderType,
    body: BlockBodyType,
}



interface BlockHeaderType {
    version: bigint, // u64
    height: bigint, // u64
    prevBlockDigest: Digest,
    timestamp: string, // u64 serialized as a numerical type
    pow: BlockPow,
    cumulativeProofOfWork: string,
    difficulty: string,
    guesserReceiverData: GuesserReceiverData,
}

interface BlockPow {
    root: Digest,
    pathA: Digest[],
    pathB: Digest[],
    nonce: Digest,
}

interface GuesserReceiverData {
    receiverDigest: Digest,
    lockScriptHash: Digest,
}



interface BlockBodyType {
    transactionKernel: TransactionKernelType,
    mutatorSetAccumulator: MutatorSetAccumulator,
    lockFreeMmrAccumulator: MmrAccumulator,
    blockMmrAccumulator: MmrAccumulator,
}

interface TransactionKernelType {
    inputs: RemovalRecord[],
    outputs: Digest,
    announcements: string[],
    fee: bigint, // NativeCurrencyAmount
    coinbase: bigint, // NativeCurrencyAmount or None
    timestamp: string, // u64 serialized as a numerical type
    mutatorSetHash: Digest,
    mergeBit: boolean,
}

interface RemovalRecord {
    absoluteIndices: AbsoluteIndexSet,
    targetChunks: TargetChunks
}

interface AbsoluteIndexSet {
    minimum: bigint, // u128
    distances: number[], // u32
}

interface TargetChunks {
    [key: string]: [[Digest], [number]]
    //                      , u32
}

interface MutatorSetAccumulator {
    leafCount: bigint, // u64
    peaks: Digest[]
}

interface MmrAccumulator {
    aocl: MmrAccumulator,
    swbfInactive: MmrAccumulator,
    swbfActive: number[] // u32
}