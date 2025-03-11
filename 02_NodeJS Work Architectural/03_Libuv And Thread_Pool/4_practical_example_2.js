'use strict';

// TODO: ====================== Synchronous Cryptography ======================
const crypto = require('crypto');

const MAX_CALLS = 3;
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
    console.log('Hash Synchronous: ', Date.now() - start);
}