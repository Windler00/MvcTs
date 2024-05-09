import * as esbuild from 'esbuild'
import config from "./config.mjs"

let ctx = await esbuild.context(
  config,
  {
    minify: false,
    sourcemap: true,
  })

await ctx.watch()
console.log('watching...')