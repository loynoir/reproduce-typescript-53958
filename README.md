# What

reproduce-typescript-53958

## Reproduce

```js
await import('@sinclair/typebox')
```

[./reproduce1/test-esm-dts-resolve-1.mjs](./reproduce1/test-esm-dts-resolve-1.mjs)

[./reproduce1/test-esm-dts-resolve-2.mjs](./reproduce1/test-esm-dts-resolve-2.mjs)

[./reproduce1/test-mts-dts-resolve.mts](./reproduce1/test-mts-dts-resolve.mts)

## Actual

dts resolve to [./node_modules/@sinclair/typebox/cjs/typebox.d.ts](./node_modules/@sinclair/typebox/cjs/typebox.d.ts)

## Expected

dts resolve to [./node_modules/@sinclair/typebox/esm/typebox.d.ts](./node_modules/@sinclair/typebox/esm/typebox.d.ts)
