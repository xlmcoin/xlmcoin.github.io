// Import the Stellar SDK
const StellarSdk = require('stellar-sdk');

// Define the asset with the name "SEC" and the given issuer address
const SEC = new StellarSdk.Asset("SEC", "GDLLGBPQSKLJ2WX2MKEJ4PK24MR3D4GJLKGUFIWCJHU7EGTJ27EUDSEC");

// Log the asset to verify
console.log(SEC);
