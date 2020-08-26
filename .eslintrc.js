module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
    env: {
      browser: true,
      node: true,
    },
    plugins: [
        'css-modules',
        '@typescript-eslint'
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      'plugin:css-modules/recommended'
    ],
    rules: {
        // Next JS has a Link component that wraps around <a></a>, inserting the href during compilation. Disable for now.
        'jsx-a11y/anchor-is-valid': 0,
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: 'either',
          depth: 25,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
            },
        },
    },
};