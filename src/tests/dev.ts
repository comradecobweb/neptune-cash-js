// This file contains code for testing individual methods during their development

import NeptuneClient from "../NeptuneClient";

async function test() {
    const neptune = new NeptuneClient();
    console.log(await neptune.network())
}

test().catch(console.error);