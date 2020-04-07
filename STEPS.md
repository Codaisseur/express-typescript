# Steps

1. `npm init`
1. `npm install typescript rimraf`
1. `npm install -D ts-node nodemon`
1. `npx typescript --init`
1. `touch .prettierignore`

```
# inside .prettierignore
tsconfig.json
```

1. Change tsconfig:

```json
{
  "compilerOptions": {
    // other options
    // only uncomment outDir and change to "./build"
    "outDir": "./build" /* Redirect output structure to the directory. */
    // more options
  },
  "include": ["src/**/*"]
}
```

1. Add build step scripts to `package.json` and configure nodemon with `nodemon.json`

- `prestart`: runs the `build` command before `start`
- `build`: build cleans the /build folder using rimraf, compiles typescript using tsc
- `start`: runs prestart to build, then runs build/index.js
- `dev`: runs ts-node with nodemon, so typescript gets recompiled on changes, for the config file check: nodemon.json

```json
{
  "name": "express-typescript",
  "main": "",
  "scripts": {
    "prestart": "npm run build",
    "build": "npx rimraf build/* && npx tsc",
    "start": "node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "rimraf": "^3.0.2",
    "typescript": "^3.8.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.2",
    "ts-node": "^8.8.2"
  }
}
```

nodemon.json

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "npx ts-node ./src/index.ts"
}
```
