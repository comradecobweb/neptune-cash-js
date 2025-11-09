export interface Network {
    network: 'main' | 'alpha' | 'beta' | 'testnet' | 'regtest' // based on the result of neptune-core --help
}

export interface Height {
    height: bigint // u64
}

export interface TipDigest {
    digest: string // Digest
}

export interface Tip {
    block: BlockType
}

export interface TipProof {
    proof: string
}

export interface TipKernel {
    kernel: BlockKernelType
}

export interface TipHeader {
    header: BlockHeaderType
}

export interface TipBody {
    body: BlockBodyType
}

export interface TipAnnouncements {
    announcements: string[]
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
    prev_block_digest: string, // Digest
    timestamp: string, // u64 serialized as a numerical type
    pow: BigInt,
    cumulative_proof_of_work: string,
    difficulty: string,
    guesser_receiver_data: GuesserReceiverData,
}

interface BlockPow {
    root: string, // Digest
    path_a: string[], // Digest
    path_b: string[], // Digest
    nonce: string, // Digest
}

interface GuesserReceiverData {
    receiver_digest: string, // Digest
    lock_script_hash: string, // Digest
}



interface BlockBodyType {
    transactionKernel: TransactionKernelType,
    mutatorSetAccumulator: MutatorSetAccumulator,
    lockFreeMmrAccumulator: MmrAccumulator,
    blockMmrAccumulator: MmrAccumulator,
}

interface TransactionKernelType {
    inputs: RemovalRecord[],
    outputs: string, // Digest
    announcements: string[],
    fee: bigint, // NativeCurrencyAmount
    coinbase: bigint, // NativeCurrencyAmount or None
    timestamp: string, // u64 serialized as a numerical type
    mutatorSetHash: string, // Digest
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
    [key: string]: [[string], [number]]
    //             Digest   , u32
}

interface MutatorSetAccumulator {
    leafCount: bigint, // u64
    peaks: string[] // Digest
}

interface MmrAccumulator {
    aocl: MmrAccumulator,
    swbfInactive: MmrAccumulator,
    swbfActive: number[] // u32
}