import {Digest} from "./base-types";

export type BlockSelector = bigint | Digest | "genesis" | "tip" // height | Digest | "genesis" | "tip"