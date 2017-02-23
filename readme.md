# markov-chain [![Build Status](https://travis-ci.org/hexacta/markov-chain.svg?branch=master)](https://travis-ci.org/hexacta/markov-chain)  
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