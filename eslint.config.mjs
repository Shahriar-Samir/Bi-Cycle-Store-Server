import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
    ignorePatterns: ['.node_modules/*', 'dist'],
  },
];
