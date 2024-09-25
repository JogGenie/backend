import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import promisePlugin from 'eslint-plugin-promise';
import typescriptSortKeysPlugin from 'eslint-plugin-typescript-sort-keys';
import { ESLint } from 'eslint';

const off = 0, warn = 1, error = 2;

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],  // Target TypeScript and JavaScript files
    languageOptions: {
      ecmaVersion: 2020,  // Set ECMAScript 2020
      sourceType: 'module',  // Use ES Modules
      parser: require('@typescript-eslint/parser'),  // TypeScript parser
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],  // Reference TypeScript config
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
      promise: promisePlugin,
      'typescript-sort-keys': typescriptSortKeysPlugin,
    },
    rules: {
      'no-console': error,
      'no-param-reassign': error,
      'require-await': error,
      'prettier/prettier': [
        error,
        {
          endOfLine: 'auto',  // Handle line endings automatically
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],  // Enforce PascalCase for interface names
          prefix: ['I'],  // Require "I" prefix for interfaces
        },
      ],
      '@typescript-eslint/explicit-function-return-type': error,
      '@typescript-eslint/no-explicit-any': warn,
      '@typescript-eslint/no-unused-vars': error,
      '@typescript-eslint/no-floating-promises': error,
      'typescript-sort-keys/interface': error,  // Enforce sorting keys in interfaces
      'typescript-sort-keys/string-enum': error,  // Enforce sorting keys in string enums
      'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],  // Sort keys in objects
    },
  },
];

