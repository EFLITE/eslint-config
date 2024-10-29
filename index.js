import antfu from '@antfu/eslint-config'

export default antfu(
  {
    svelte: true,
  },
  {
    files: ['**/*.svelte'],
    rules: {
      'svelte/valid-compile': ['error', { ignoreWarnings: true }], // because this throws numerous useless a11y errors
      'svelte/no-dom-manipulating': 'error',
      'svelte/no-store-async': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/button-has-type': 'error',
      'svelte/no-dupe-on-directives': 'error',
      'svelte/infinite-reactive-loop': 'error',
      'svelte/valid-prop-names-in-kit-pages': 'error',
      'svelte/mustache-spacing': 'error',
      'svelte/html-closing-bracket-spacing': 'error',
      'svelte/no-reactive-reassign': 'warn',
      'svelte/no-at-html-tags': 'off',
      'svelte/no-svelte-internal': 'error',
      'svelte/no-immutable-reactive-statements': 'error',
      'svelte/sort-attributes': 'warn',
      'svelte/block-lang': [
        'error',
        {
          script: ['ts'], // a list of languages or null to signify no language specified
          // style: 'scss', // same as for script, a single value can be used instead of an array.
        },
      ],
    },
  },

)
