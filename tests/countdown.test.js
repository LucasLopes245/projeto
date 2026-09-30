import test from "node:test";
import assert from "node:assert/strict";
import { getCountdown } from "../src/countdown.js";
import { EVENT_DATE, EVENT_LABEL } from "../src/config.js";
test("Meia-noite de Brasília corresponde a 03:00 UTC", () => {
  assert.equal(new Date(EVENT_DATE).toISOString(), "2026-10-19T03:00:00.000Z");
  assert.equal(EVENT_LABEL, "19/10/2026");
});
test("Calcula dias, horas, minutos e segundos usando o instante real", () => {
  const target = new Date(EVENT_DATE).getTime();
  assert.deepEqual(
    getCountdown(target - (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000),
    { days: 2, hours: 3, minutes: 4, seconds: 5, released: false },
  );
});
test("Não libera antes da hora, inclusive no último milissegundo", () => {
  const target = new Date(EVENT_DATE).getTime();
  assert.equal(getCountdown(target - 1).released, false);
  assert.equal(getCountdown(target - 1).seconds, 1);
});
test("Libera no instante exato e nunca produz números negativos", () => {
  const target = new Date(EVENT_DATE).getTime();
  for (const now of [target, target + 1, target + 86400000])
    assert.deepEqual(getCountdown(now), {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      released: true,
    });
});
