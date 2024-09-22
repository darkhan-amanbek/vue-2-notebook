import pluginVue from 'eslint-plugin-vue';

export default [
  ...pluginVue.configs['flat/vue2-recommended'],
  {
    rules: {},
    languageOptions: {
      globals: {
        ref: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        // ...more APIs
      }
    }
  }
]