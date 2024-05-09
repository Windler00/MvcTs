import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  config,
  minify: false,
  sourcemap: true,
  })
  
  await ctx.watch()
  console.log('watching...')