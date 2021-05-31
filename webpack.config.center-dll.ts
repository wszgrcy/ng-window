import * as webpack from 'webpack';
import * as path from 'path';
import { setNgDllPlugin,RemoteModuleStartupMainTemplatePlugin,RemoteModuleManifestStartupMainTemplatePlugin,NgNamedMainTemplatePlugin } from 'webpack-ng-dll-plugin';
export default (config: webpack.Configuration, options) => {
  setNgDllPlugin(
    config,
    {
      output: {
        filename: 'dll.js',
      },
      ngDllPluginOptions: {
        path: path.join(__dirname, 'dist', 'manifest.json'),
        name: 'Dll',
        format: true,
        filter: {
          mode: 'full',
        },
      },
    },
    options
  );
  config.plugins.push(new RemoteModuleStartupMainTemplatePlugin());
  config.plugins.push(new RemoteModuleManifestStartupMainTemplatePlugin());
  config.plugins.push(new NgNamedMainTemplatePlugin());

  return config;
};