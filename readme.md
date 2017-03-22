# `generator-headsup`

kickstart JS development without bullshit just essentials.

### 0. Requirements

[Yarn](https://yarnpkg.com/en/docs/install)

### 1. Install

#### `yarn add global yo generator-headsup`

### 2. Generate

#### `yo headsup`

* will ask for project name
* will run `yarn` to get dev dependencies (usually takes ~10s on my setup)

### 3. Play

#### `npm start`

[localhost:8080](http://localhost:8080)

## What you get

### Goodies

webpack, webpack-dev-server, es2015, stage-0, autoprefixer, postcss (w/ precss a.k.a sass light)

### File tree:

```
├── .gitignore
├── .nvmrc
├── package.json
├── src            <--- do your magic here
│   ├── index.html <--- served on npm start
│   └── index.js   <--- entry point for JS
├── webpack.config.js
└── yarn.lock
```

---

## TODO

* [ ] generate dummy readme
* [ ] stupid simple build step
* [ ] test
* [ ] optional mocha
* [ ] optional react
* [ ] optional css (with all the sparkles)
* [ ] optional hmr?

