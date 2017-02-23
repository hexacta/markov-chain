# markov-chain [![Build Status](https://travis-ci.org/hexacta/markov-chain.svg?branch=master)](https://travis-ci.org/hexacta/markov-chain) [![npm version](https://img.shields.io/npm/v/hx-markov-chain.svg?style=flat)](https://www.npmjs.com/package/hx-markov-chain) [![XO code style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)  
> Create, update and run Markov chain models for text generation.

## Install
```
$ npm install --save hx-markov-chain
```

## Usage

```js
const markov = require("hx-markov-chain");
const model = markov.create();
markov.update(model, ["a", "b", "c"]);
markov.update(model, ["a", "c", "d"]);
const chain = markov.run(model);
```

## API

### markov.create()
### markov.update(model, chain)
### markov.run(model)

## License

MIT © [Hexacta](http://www.hexacta.com)