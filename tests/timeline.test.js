import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { timeline } from "../src/data/timeline.js";

test("Timeline mantém a ordem oficial e os destaques", () => {
  assert.deepEqual(
    timeline.map((chapter) => chapter.id),
    [
      "comeco",
      "pedido",
      "apresentacao",
      "natal",
      "ano-novo",
      "formatura",
      "viagem",
      "copa",
      "aniversario",
    ],
  );
  assert.deepEqual(
    timeline.filter((chapter) => chapter.featured).map((chapter) => chapter.id),
    ["pedido", "formatura", "viagem", "aniversario"],
  );
});
test("Todas as fotos existem, começam em 1.jpg e seguem ordem numérica", () => {
  assert.equal(
    timeline.reduce((sum, chapter) => sum + chapter.images.length, 0),
    19,
  );
  for (const chapter of timeline) {
    assert.equal(chapter.date, "");
    assert.equal(chapter.description, "");
    assert.equal(chapter.quote, "");
    chapter.images.forEach((path, index) => {
      assert.ok(path.endsWith(`/${index + 1}.jpg`));
      assert.ok(
        existsSync(new URL(`../public/${path}`, import.meta.url)),
        path,
      );
    });
  }
});
