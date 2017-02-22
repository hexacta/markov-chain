(function() {
  var START = " ^";
  var END = " $";

  function count(model, token) {
    const tmodel = model.tokens[token];
    return tmodel ? tmodel.count : 0;
  }

  function add(model, prev, token) {
    model.count += 1;

    model.tokens[token] = model.tokens[token] || { count: 0, tokens: {} };
    model.tokens[token].count += 1;

    if (prev) {
      model.tokens[prev] = model.tokens[prev] || { count: 0, tokens: {} };
      model.tokens[prev].tokens[token] = model.tokens[prev].tokens[token] ||
        { count: 0, tokens: {} };
      model.tokens[prev].tokens[token].count += 1;
    }
  }

  function update(model, tokens) {
    var prev = null;
    [].concat(START, tokens, END).forEach(function(token) {
      add(model, prev, token);
      prev = token;
    });
  }

  function create() {
    return { count: 0, tokens: {} };
  }

  var markov = {
    START: START,
    END: END,
    create: create,
    update: update,
    count: count
  };

  if (typeof module != "undefined" && module.exports) {
    module.exports = markov;
  }

  if (typeof window != "undefined") {
    window.markov = markov;
  }
})();
