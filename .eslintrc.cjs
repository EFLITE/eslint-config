module.exports = {
  root: true,
  extends: ['@antfu', 'plugin:svelte/recommended'],
  globals: {
    globalThis: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 13, // es2022
    sourceType: 'module',
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'svelte/infinite-reactive-loop': 'warn',
        'svelte/no-export-load-in-svelte-module-in-kit-pages': 'warn',
        'svelte/no-reactive-reassign': 'warn',
        'svelte/no-store-async': 'warn',
        'svelte/require-store-callbacks-use-set-param': 'warn',
        'svelte/require-store-reactive-access': 'warn',
        'svelte/valid-prop-names-in-kit-pages': 'warn',
        'svelte/no-target-blank': 'warn',
        'svelte/no-useless-mustaches': 'warn',
        'svelte/require-each-key': 'warn',
        'svelte/require-event-dispatcher-types': 'warn',
        'svelte/require-stores-init': 'warn',
        'svelte/valid-each-key': 'warn',
        'svelte/no-at-html-tags': 'off',
        'svelte/html-closing-bracket-spacing': 'warn',
        'svelte/spaced-html-comment': 'warn',
        'import/first': 'off',
        'import/no-mutable-exports': 'off',
        // 'no-multiple-empty-lines': 'off',
      },
    },
  ],

  rules: {
    'no-console': 'warn',
    // '@typescript-eslint/semi': ['warn', 'always'],
    // 'curly': ['warn', 'all'],
    // '@typescript-eslint/member-delimiter-style': [
    //   'warn',
    //   {
    //     multiline: {
    //       delimiter: 'semi',
    //       requireLast: true,
    //     },
    //     singleline: {
    //       delimiter: 'semi',
    //       requireLast: false,
    //     },
    //     multilineDetection: 'brackets',
    //   },
    // ],
    '@typescript-eslint/quotes': [
      'warn',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
  },
}
