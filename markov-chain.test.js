import test from "ava";
import markov from "./markov-chain";

test("create", t => {
  t.truthy(markov.create());
});

test("one token", t => {
  const model = markov.create();
  markov.update(model, ["one"]);
  const count = markov.count(model, ["one"]);
  t.is(count, 1);
});

test("missing token", t => {
  const model = markov.create();
  markov.update(model, ["one"]);
  const count = markov.count(model, ["two"]);
  t.is(count, 0);
});

test("a b c", t => {
  const model = markov.create();
  markov.update(model, ["a", "b", "c"]);

  t.is(markov.count(model, ["a"]), 1);
  t.is(markov.count(model, ["b"]), 1);
  t.is(markov.count(model, ["c"]), 1);
  t.is(markov.count(model, ["d"]), 0);
  t.is(markov.count(model, ["a", "b"]), 1);
  t.is(markov.count(model, ["b", "c"]), 1);
  t.is(markov.count(model, ["a", "c"]), 0);
  t.is(markov.count(model, ["a", "b", "c"]), 1);
});

test("a b a b", t => {
  const model = markov.create();
  markov.update(model, ["a", "b", "a", "b"]);

  t.is(markov.count(model, ["a"]), 2);
  t.is(markov.count(model, ["b"]), 2);
  t.is(markov.count(model, ["a", "a"]), 0);
  t.is(markov.count(model, ["a", "b"]), 2);
  t.is(markov.count(model, ["b", "a"]), 1);
  t.is(markov.count(model, ["a", "b", "a"]), 1);
  t.is(markov.count(model, ["b", "a", "b"]), 1);
});

test("a a a", t => {
  const model = markov.create();
  markov.update(model, ["a", "a", "a"]);

  t.is(markov.count(model, ["a"]), 3);
  t.is(markov.count(model, ["a", "a"]), 2);
  t.is(markov.count(model, ["a", "a", "a"]), 1);
});
