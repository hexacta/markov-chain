(function() {
  if (typeof markov === "undefined" || markov === null) {
    var markov = {};
  }

  markov.foo = function() {
    return "yes";
  };

  if (typeof module != "undefined" && module.exports) {
    module.exports = markov;
  }

  if (typeof window != "undefined") {
    window.markov = markov;
  }
})();
