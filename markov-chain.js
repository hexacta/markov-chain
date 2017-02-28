(function() {
  var START = " ^";
  var END = " $";
  var DEPTH = 3;

  function create() {
    return { count: 0, tokens: {} };
  }

  function update(model, chain) {
    var depth = DEPTH;
    var fullChain = [].concat(START, chain, END);
    for (var i = 1; i <= fullChain.length; i++) {
      var start = i < depth ? 0 : i - depth;
      var end = i;
      var currentChain = fullChain.slice(start, end);
      add(model, currentChain);
    }
  }

  function run(model) {
    var chain = [START];
    var token = START;
    while (token != END) {
      var prev = chain.slice(-DEPTH+1);
      var token = next(model, prev);
      chain.push(token);
    }
    return chain.slice(1,-1);
  }

  function add(model, chain) {
    var node = getNode(model, chain);
    node.count += 1;
    var next = chain.slice(1);

    if (next.length) {
      add(model, next);
    } else {
      model.count += 1;
    }
  }

  function getNode(model, chain) {
    var node = model;
    chain.forEach(function(token) {
      node.tokens[token] = node.tokens[token] || create();
      node = node.tokens[token];
    });
    return node;
  }

  function count(model, chain) {
    var node = getNode(model, chain);
    return node.count;
  }

  function next(model, prev) {
    var node = getNode(model, prev);
    if (!node.count) {
      throw Error("Path missing from model " + prev);
    }
    var pivot = Math.random() * node.count;
    var tokens = Object.keys(node.tokens);
    for (var k = i = 0; k < tokens.length; k++) {
      var token = tokens[k];
      i += node.tokens[token].count;
      if (i > pivot) {
        return token;
      }
    }
  }

  var markov = {
    START: START,
    END: END,
    create: create,
    update: update,
    count: count,
    run: run
  };

  if (typeof module != "undefined" && module.exports) {
    module.exports = markov;
  }

  if (typeof window != "undefined") {
    window.markov = markov;
  }
})();
