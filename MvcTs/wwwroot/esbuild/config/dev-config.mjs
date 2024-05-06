import * as esbuild from 'esbuild'
import entryPoints from './entry-points.mjs'

let ctx = await esbuild.context({
    entryPoints,
    bundle: true,
    minify: false,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outdir: './build/',
    tsconfig: './tsconfig.json',
    write: true
    //outfile: './build/bundle.js',
  })
  
  await ctx.watch()
  console.log('watching...')