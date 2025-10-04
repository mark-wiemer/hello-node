# Hello Node

Experiments to learn advanced features of [Node.js](https://nodejs.org)

## Commands

Tested with Node 22.20.0 on Linux Mint. `package.json` intentionally leaves out the `type` property for testing.

### Hello world

```
node src/hello.js
```

Output:

```
Hello world!
```

---

### With `--loader` flag

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

### With `--import` flag inline

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

### With `--import` flag to a file

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
