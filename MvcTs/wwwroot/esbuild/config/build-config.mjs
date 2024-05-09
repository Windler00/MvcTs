import * as esbuild from 'esbuild'
import config from './config.mjs'
import fs from'fs';

const deleteMapFiles = function (path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function (file) {
        const curPath = path + '/' + file;
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteMapFiles(curPath);
        } else {
          if (file.endsWith('.map')) {
            fs.unlinkSync(curPath);
          }
        }
      });
    }
  };

deleteMapFiles('./build/');

const prodConfig = {
    ...config,
    minify: true,
    sourcemap: false,
  }

await esbuild.build(prodConfig)