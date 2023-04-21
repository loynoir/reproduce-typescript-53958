import { deepStrictEqual } from "node:assert";
import { createRequire } from "node:module";
import { join } from "node:path";
import { cwd } from "node:process";
import { describe, it } from "node:test";
import { pathToFileURL } from "node:url";

class NotImplementedError extends Error {}

describe("runtime resolve test", () => {
  it("runtime cjs resolve", () => {
    const require = createRequire(import.meta.url);

    deepStrictEqual(
      require.resolve("@sinclair/typebox"),
      join(cwd(), "node_modules/@sinclair/typebox/cjs/typebox.js"),
    );
  });

  it("runtime esm resolve", async () => {
    deepStrictEqual(
      await import.meta.resolve?.("@sinclair/typebox"),
      pathToFileURL(
        join(cwd(), "node_modules/@sinclair/typebox/esm/typebox.js"),
      ).href,
    );
  });
});

describe("typescript resolve test", () => {
  it("editor cjs dts resolve", () => {
    throw new NotImplementedError();
  });

  it("editor esm dts resolve", () => {
    throw new NotImplementedError();
  });
});
