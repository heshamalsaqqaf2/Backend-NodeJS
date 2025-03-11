'use strict';

// TODO: ====================== Async Cryptography using Thread Pool ======================
const crypto = require("crypto");

const MAX_CALLS = 5;
const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 6;

for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}

/** 
 * @output
 **  Not Using process.env.UV_THREADPOOL_SIZE = 6;
        Hash: 3 4787
        Hash: 1 4851
        Hash: 2 4852
        Hash: 4 4916
 *?     Hash: 5 7856 => We can see that call #5 took longer than the rest.
 
 * @output
 **  Using process.env.UV_THREADPOOL_SIZE = 6;
        Hash: 1 2161
        Hash: 3 2177
        Hash: 2 2177
        Hash: 4 2178
        Hash: 5 3523
*/