import * as esbuild from 'esbuild'
import entryPoints from './entry-points.mjs'

await esbuild.build({
  entryPoints,
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outdir: './build/',
  tsconfig: './tsconfig.json',
  write: true,
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
    '.css': 'css'
  },
})