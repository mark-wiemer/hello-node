import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

// paths are relative to root
console.log("Registering loader");
const __dirname = fileURLToPath(new URL(".", import.meta.url));
register(pathToFileURL(resolve(__dirname, "./my-loader.mjs")).href);
