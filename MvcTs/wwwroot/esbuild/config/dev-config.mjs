import * as esbuild from 'esbuild'
import config from "./config.mjs"

const devConfig = {
  ...config,
  minify: false,
  sourcemap: true,
}

let ctx = await esbuild.context(devConfig)

await ctx.watch()
console.log('watching...')