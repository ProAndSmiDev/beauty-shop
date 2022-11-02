const { defineConfig } = require('@vue/cli-service');
const path = require('path');

function addStyleResources(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/helpers/fz.scss'),
        path.resolve(__dirname, './src/styles/helpers/funcs.scss'),
        path.resolve(__dirname, './src/styles/helpers/mixins.scss'),
        path.resolve(__dirname, './src/styles/helpers/fonts.scss'),
        path.resolve(__dirname, './src/styles/helpers/vars.scss'),
      ],
    });
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResources(config.module.rule('scss').oneOf(type)));
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/REPO_NAME/' : '/',
});
