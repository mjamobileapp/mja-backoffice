import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu(
  {
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      // Allow trailing space in comments, for possible JSDoc formattings
      'style/no-trailing-spaces': ['error', { ignoreComments: true }],
      // Relaxes inline statements a bit
      'style/max-statements-per-line': ['error', { max: 2 }],
      // Legacy screens still contain transitional logging and unused helpers.
      // Keep them visible without blocking the formatting/import gate.
      'no-console': 'warn',
      'no-alert': 'warn',
      'unused-imports/no-unused-vars': 'warn',
      'vue/no-unused-vars': 'warn',
      'ts/no-use-before-define': 'warn',
      'node/prefer-global/process': 'warn',
      'unicorn/prefer-number-properties': 'warn',
    },
  },
  // Allow trailing space for markdown formatting
  {
    files: ['**/*.md'],
    rules: {
      'style/no-trailing-spaces': 'off',
    },
  },
))
