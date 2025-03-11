'use strict';

// TODO: ====================== Networking Operations with Fetch API ======================
console.log("First")
import fetch from 'node-fetch';

fetch('http://example.com')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));

console.log("Third")
