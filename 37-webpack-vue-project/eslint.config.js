import pluginVue from 'eslint-plugin-vue';

export default [
  ...pluginVue.configs['flat/vue2-recommended'],
  {
    rules: {},
  }
]