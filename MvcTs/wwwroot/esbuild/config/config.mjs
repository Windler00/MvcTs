const config = [
  {
    entryPoints,
    bundle: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outdir: './build/',
    tsconfig: './tsconfig.json',
    allowOverwrite: true,
    loader: {
      '.png': 'file',
      '.jpg': 'file',
      '.svg': 'file',
      '.css': 'css'
    },
  }
];

export default config