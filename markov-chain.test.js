import test from "ava";
import markov from "./markov-chain";

test("first test", t => {
  t.is(markov.foo(), "yes");
});
