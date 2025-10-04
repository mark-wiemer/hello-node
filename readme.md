# Hello Node

Experiments to learn advanced features of [Node.js](https://nodejs.org)

## Commands

Tested with Node 22.20.0 on Linux Mint. `package.json` intentionally leaves out the `type` property for testing.

<details><summary><h3>Hello world</h3></summary>

```
node src/hello.js
```

Output:

```
Hello world!
```

</details>

<details><summary><h3>With `--loader` flag</h3></summary>

Ref https://github.com/mochajs/mocha/issues/5361#issuecomment-3365374155

```
node --loader="./src/my-loader.mjs" src/hello.js
```

Output:

```
(node:142884) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("./src/my-loader.mjs", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
Resolving via custom loader
file:///home/markw/my-stuff/mocha-stuff/hello-node/src/hello.js
{
  conditions: [ 'node', 'import', 'module-sync', 'node-addons' ],
  importAttributes: {},
  parentURL: undefined
}
Hello world!
```

</details>

<details><summary><h3>With `--import` flag inline</h3></summary>

Ref https://github.com/mochajs/mocha/issues/5361#issuecomment-3365374155

```
node --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("./src/my-loader.mjs", pathToFileURL("./"));' src/hello.js
```

```
Resolving via custom loader
file:///home/markw/my-stuff/mocha-stuff/hello-node/src/hello.js
{
  conditions: [ 'node', 'import', 'module-sync', 'node-addons' ],
  importAttributes: {},
  parentURL: undefined
}
Hello world!
```

</details>

<details><summary><h3>With `--import` flag to a file</h3></summary>

```
node --import ./src/register-loader.mjs src/hello.js
```

```
Registering loader
Resolving via custom loader
file:///home/markw/my-stuff/mocha-stuff/hello-node/src/hello.js
{
  conditions: [ 'node', 'import', 'module-sync', 'node-addons' ],
  importAttributes: {},
  parentURL: undefined
}
Hello world!
```

</details>

<details><summary><h3>With a file resolved specially via custom loader</h3></summary>

```
node --import ./src/register-loader.mjs src/hello.ts
```

```
Registering loader
Resolving via custom loader
file:///home/markw/my-stuff/mocha-stuff/hello-node/src/hello.ts
{
  conditions: [ 'node', 'import', 'module-sync', 'node-addons' ],
  importAttributes: {},
  parentURL: undefined
}
Hello from ESM (mjs)!
```

</details>

<details><summary><h3>Importing a non-existing file</h3></summary>

```
node src/import-non-existing.mjs
```

```
node:internal/modules/package_json_reader:266
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
        ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'non-existing-package' imported from /home/markw/my-stuff/mocha-stuff/hello-node/src/import-non-existing.mjs
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:266:9)
    at packageResolve (node:internal/modules/esm/resolve:767:81)
    at moduleResolve (node:internal/modules/esm/resolve:853:18)
    at defaultResolve (node:internal/modules/esm/resolve:983:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:731:20)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:708:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:310:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:183:49) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v22.20.0
```

</details>
