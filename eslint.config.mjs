import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
    ignores: ['.node_modules/*'],
  },
];