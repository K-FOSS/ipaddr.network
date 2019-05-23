const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

export default withCSS(
  withOffline({
    webpack: (config: any) => {
      config.module.rules.map((item: any, key: any) => {
        if (item.test.toString() == '/\\.css$/') config.module.rules[key].sideEffects = true;
      });
      return config;
    }
  })
)