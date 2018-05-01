# `generator-headsup`

yeoman generator to kickstart JS development with bare essentials and nothing more

prototype like never before!

1. `npm i -g yo generator-headsup`
1. `yo headsup`
1. `npm start`
1. [localhost:8080](http://localhost:8080)

build? `npm run build`

---

# What does it do?

after runing `yo headsup`:

1. it will ask for project name
1. it will run `npm install` to get dependencies (my nonfancy setup takes ~10s)
1. it will create `src/index.js` and `src/index.html` for you to start

## What's behind

is a bunch of webpack and its dependencies

it's configured to have:

* dev server and build command
* babel with es2015, stage-0 and react presets
* css modules, postcss with precss and autoprefixer

### File tree:

```
├── .gitignore
├── .nvmrc
├── package.json
├── src            <--- do your magic here
│   ├── index.html <--- served on npm start
│   └── index.js   <--- entry point for JS
├── webpack.config.js
└── package-lock.json
```

---

## TODO

* [ ] generate dummy readme
* [X] stupid simple build step
* [ ] test
* [ ] optional mocha
* [ ] optional react
* [ ] **optional** css (with all the sparkles)
* [ ] optional hmr?

