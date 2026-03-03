import { readFile } from "node:fs/promises";
import jwkToPem from "jwk-to-pem";

const jwkFile = (await readFile("key.json")).toString();

const parsedJwk = JSON.parse(jwkFile);

const pem = jwkToPem(parsedJwk, { private: true });

console.log(`PEM (raw):`);
console.log(`vvvvvvvv`);
console.log(pem);
console.log(`^^^^^^^^`);

console.log();

console.log(`PEM (correct format for JSON field):`);
console.log(`vvvvvvvv`);
console.log(JSON.stringify({ key: pem }, undefined, 2));
console.log(`^^^^^^^^`);
