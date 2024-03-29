import * as webpack from 'webpack';
import * as path from 'path';
import { NgNamedExportPlugin } from 'webpack-ng-dll-plugin';

export default (config: webpack.Configuration) => {
  config.plugins.push(
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: require('./dist/manifest.json'),
    })
  );
  config.output.library = 'centerLib';
  const exportFilePath = path.resolve(__dirname,'src', 'export-module.ts');
  (config.entry as any).main.push(exportFilePath);
  config.plugins.push(
      new NgNamedExportPlugin(exportFilePath, {
          name: 'centerLib',
          path: path.resolve(__dirname, 'dist', 'main-manifest.json'),
          watchWrite: true
      })
  );
  return config;
};
