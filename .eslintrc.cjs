module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', 'node_modules', 'public'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'import', 'unused-imports', 'jest-dom', 'testing-library'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // import
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'index', 'type', 'sibling', 'parent'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@src/**',
            position: 'before',
          },
        ],
      },
    ],
    // react
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint
    '@typescript-eslint/consistent-type-imports': 'error',
    // unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: {
    files: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.cjs', '.ts', '.tsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        config: 'tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
