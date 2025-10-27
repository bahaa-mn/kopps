import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,

  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single'
  },

  rules: {
    'style/comma-dangle': 'off',
    'node/prefer-global/process': 'off',
    'no-console': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  },

  ignores: [
    'server/db/migrations/**'
  ]
})
