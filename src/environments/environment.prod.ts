export const environment = {
  production: true,
  applicationAssetsMethod: async () => {
    return {
      scripts: [
        {
          name: 'main',
          fileName: 'window-application.main.js',
          defer: '',
          src: 'https://wszgrcy.github.io/ng-window-application/window-application.main.js',
        },
        {
          name: 'runtime',
          fileName: 'window-application.runtime.js',
          defer: '',
          src: 'https://wszgrcy.github.io/ng-window-application/window-application.runtime.js',
        },
      ],
      stylesheets: [],
    };
  },
};
