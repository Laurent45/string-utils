import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript ESLint recommended rules
  ...tseslint.configs.recommendedTypeChecked,

  // Prettier integration (must be last to override formatting rules)
  prettier,

  // Project-specific configuration
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Enforce explicit return types for better documentation
      '@typescript-eslint/explicit-function-return-type': 'warn',

      // Prevent unused variables (allow _ prefix for intentionally unused)
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Strictly forbid 'any' type to maintain type safety
      '@typescript-eslint/no-explicit-any': 'error',

      // Warn about console.log but allow console.warn and console.error
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Prettier formatting violations as errors
      'prettier/prettier': 'error',
    },
  },

  // Disable type-checking rules for test files
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    ...tseslint.configs.disableTypeChecked,
  },

  // Files to ignore
  {
    ignores: ['dist/', 'node_modules/', 'coverage/', '*.config.js'],
  }
);
