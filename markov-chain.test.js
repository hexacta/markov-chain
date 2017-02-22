import test from "ava";
import markov from "./markov-chain";

test("create", t => {
  t.truthy(markov.create());
});

test("one token", t => {
  const model = markov.create();
  markov.update(model, ["one"]);
  const count = markov.count(model, "one");
  t.is(count, 1);
});

test("missing token", t => {
  const model = markov.create();
  markov.update(model, ["one"]);
  const count = markov.count(model, "two");
  t.is(count, 0);
});
