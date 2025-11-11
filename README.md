# Neptune Cash JS

Neptune Cash JS is a community-made wrapper for
[neptune-core JSON RPC API ](https://github.com/Neptune-Crypto/neptune-core/tree/master/neptune-core/src/application/json_rpc)
requests. Currently, it supports
[first 20 implemented API methods](https://github.com/Neptune-Crypto/neptune-core/blob/41f5db8a38b2b1cc9f2880a04e71858084396d77/neptune-core/src/application/json_rpc/core/api/ops.rs#L32-L92).
Licensed under [Apache-2.0](LICENSE.md).

## How to use it?

I assume, that you have already used libraries like [ethers](https://ethers.org/) or [viem](https://viem.sh/) and
know how `JSON-RPC` works. Also, I hope you are a little bit familiar
with [neptune-core](https://github.com/Neptune-Crypto/neptune-core).

First of all, install the library using:

```shell
npm install neptune-cash
```

Next, create a client object:

```typescript
import {NeptuneClient} from "neptune-cash"

const neptune = new NeptuneClient()
```

Note, that you aren't connect with the server immediately. The connection happens every time when you invoke methods.

The constructor takes two parameters:

1) `hostName` - host name of the RPC server, default `localhost`
2) `port` - port of the RPC server, default `9797`

To create your own server check [Configuring RPC server](#configuring-rpc-server). If you don't like to, you can use mine -
hostName: `217.160.149.196` with default port 🙂

## Methods

The [NeptuneClient](src/NeptuneClient.ts) class provides two kinds of `async` methods:

1) with `safe` prefix - they return error (if occurred) as a field of an object:

    ```typescript
    { success: true, data: T } | { success: false, error: JSONRPCErrorType | RequestErrorType }
    ``` 
   In this case I was inspired by [zod](https://zod.dev/basics?id=handling-errors). See
   [src/types/internal.ts](src/types/internal.ts) for more details.

2) without `safe` prefix - these methods can throw instance of class extending `Error` if error occurred.

## Error classes

The library provides following classes for error handling (no other errors can be thrown):

1) [RequestError](src/errors/RequestError.ts) - extends `Error` - responsible for network errors, e.g. invalid port or no
   internet connection.
2) [JSONRPCError](src/errors/JSONRPCError.ts) - extends `Error`, responsible for errors from RPC responses. Also parent
   class for two following:

- [MethodNotFoundError](src/errors/MethodNotFoundError.ts) - thrown when your server doesn't support a given method.
- [InvalidParamsError](src/errors/InvalidParamsError.ts) - thrown when params you provided to method are invalid. Types
  of method arguments aren't perfect so this error can occur often.

## Configuring RPC server

1) Download `neptune-core 0.5.0` from [here](https://github.com/Neptune-Crypto/neptune-core/releases/tag/v0.5.0).
2) Sync your node with the network:

    ```shell
    neptune-core --peer <address>
    ```

   To get currently working peers you can search the internet or ask someone on
   the [Neptune Cash Telegram](https://t.me/neptune_project).
   You can use many `--peer` with other addresses.

3) Run the server:

    ```shell
    neptune-core --listen-rpc --peer <address> --rpc-modules "chain,node,archival"
    ```
   This command will start the server with all modules (and methods) supported by the library.

## Tech stack

The whole library is based on the [ofetch](https://github.com/unjs/ofetch). Also, I've used `ts-node` as a dev
dependency.

## Contact

If you have any questions/suggestions feel free to message me on Telegram, or Discord: `@comradecobweb`. You can also
open an issue!

## Useful resources

[API Docs](https://kaffinpx.gitbook.io/neptune) <br>
[Kaffin's PR](https://github.com/KaffinPX/neptune-core/commit/b5eb3f4dc9f229eda86cc4b8b4f860e21f5d4035) <br>
[message.rs](https://github.com/Neptune-Crypto/neptune-core/blob/master/neptune-core/src/application/json_rpc/core/model/message.rs) <br>
[https.rs](https://github.com/Neptune-Crypto/neptune-core/blob/master/neptune-core/src/application/json_rpc/server/http.rs) <br>
[ops.rs](https://github.com/Neptune-Crypto/neptune-core/blob/master/neptune-core/src/application/json_rpc/core/api/ops.rs)