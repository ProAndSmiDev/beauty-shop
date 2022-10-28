const { defineConfig } = require('@vue/cli-service');
const path = require('path');

function addStyleResources(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/helpers/fz.scss'),
        path.resolve(__dirname, './src/styles/helpers/funcs.scss'),
        path.resolve(__dirname, './src/styles/helpers/mixins'),
        path.resolve(__dirname, './src/styles/helpers/clear'),
      ],
    });
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResources(config.module.rule('scss').oneOf(type)));
  },
});
