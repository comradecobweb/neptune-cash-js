export interface Network {
    network: 'main' | 'alpha' | 'beta' | 'testnet' | 'regtest' // based on the result of neptune-core --help
}

export interface Height {
    height: number
}