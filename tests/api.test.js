import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import database from "../public/db.json" with { type: "json" };
import vercelHandler from "../api/products.js";
import netlifyHandler from "../netlify/functions/products.mjs";

test("El catálogo tiene al menos 10 registros válidos, únicos y con fotos locales", () => {
  assert.ok(database.products.length >= 10);
  assert.equal(new Set(database.products.map((p) => p.id)).size, database.products.length);
  for (const product of database.products) {
    assert.ok(Number.isInteger(product.id));
    assert.ok(product.name.trim());
    assert.ok(Number.isFinite(product.price) && product.price > 0);
    assert.ok(existsSync(new URL(`../src/assets/images/${product.image}`, import.meta.url)) ||
      existsSync(new URL(`../src/assets/images/products/${product.image}.jpg`, import.meta.url)));
  }
});

function responseDouble() {
  return {
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
  };
}

test("Los dos adaptadores de producción devuelven el mismo catálogo en GET", async () => {
  const vercel = vercelHandler({ method: "GET" }, responseDouble());
  const netlify = await netlifyHandler(new Request("https://example.test/api/products"));
  assert.equal(vercel.statusCode, 200);
  assert.equal(netlify.status, 200);
  assert.deepEqual(vercel.body, database.products);
  assert.deepEqual(await netlify.json(), database.products);
  assert.match(netlify.headers.get("content-type"), /application\/json/);
});

test("La API de solo lectura rechaza POST sin modificar el catálogo", async () => {
  const vercel = vercelHandler({ method: "POST" }, responseDouble());
  const netlify = await netlifyHandler(new Request("https://example.test/api/products", { method: "POST" }));
  assert.equal(vercel.statusCode, 405);
  assert.equal(netlify.status, 405);
  assert.equal(vercel.headers.Allow, "GET");
  assert.equal(netlify.headers.get("allow"), "GET");
});
