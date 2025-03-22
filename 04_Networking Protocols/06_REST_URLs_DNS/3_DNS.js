/**
 * @description
 *!  DNS (Domain Name System)
 *   The Domain Name System (DNS) is a critical component of internet infrastructure that translates
 *   human-readable domain names (like example.com) into numerical IP addresses. This translation
 *   allows users to access websites and services using familiar names instead of having to remember
 *   complex numerical addresses.
 * 
 *   In NodeJS, the dns module provides functionality to interact with DNS services. For instance,
 *   you can use the dns.lookup function to resolve a domain name to its corresponding IP address:
*/

const dns = require('node:dns');

dns.lookup('nodejs.org', (err, address, family) => {
    if (err) throw new Error(err);

    console.log('IP Address:', address);
    console.log('Family:', family);
});

