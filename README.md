# String Utils

A lightweight, well-typed string utility library demonstrating CI/CD best practices.

[![CI](https://github.com/your-username/string-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/string-utils/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/%40your-username%2Fstring-utils.svg)](https://www.npmjs.com/package/@your-username/string-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Written in TypeScript with full type definitions
- Zero dependencies
- Comprehensive test coverage (>80%)
- Modern ESLint & Prettier configuration
- Automated CI/CD with GitHub Actions
- Well-documented with JSDoc comments

## Installation

```bash
npm install @your-username/string-utils
```

## Usage

```typescript
import {
  capitalize,
  toCamelCase,
  toKebabCase,
  truncate,
  countOccurrences,
  isValidEmail,
  removeWhitespace,
  reverse,
} from '@your-username/string-utils';

// Capitalize first letter
capitalize('hello world'); // 'Hello world'

// Convert to camelCase
toCamelCase('hello-world'); // 'helloWorld'

// Convert to kebab-case
toKebabCase('helloWorld'); // 'hello-world'

// Truncate string
truncate('Hello World', 8); // 'Hello...'

// Count occurrences
countOccurrences('hello world', 'o'); // 2

// Validate email
isValidEmail('test@example.com'); // true

// Remove whitespace
removeWhitespace('hello world'); // 'helloworld'

// Reverse string
reverse('hello'); // 'olleh'
```

## API Documentation

### `capitalize(str: string): string`

Capitalizes the first letter of a string.

**Parameters:**
- `str`: The string to capitalize

**Returns:** The capitalized string

**Example:**
```typescript
capitalize('hello'); // 'Hello'
```

### `toCamelCase(str: string): string`

Converts a string to camelCase.

**Parameters:**
- `str`: The string to convert

**Returns:** The camelCase string

### `toKebabCase(str: string): string`

Converts a string to kebab-case.

**Parameters:**
- `str`: The string to convert

**Returns:** The kebab-case string

### `truncate(str: string, maxLength: number, suffix?: string): string`

Truncates a string to a specified length and adds a suffix.

**Parameters:**
- `str`: The string to truncate
- `maxLength`: Maximum length before truncation
- `suffix`: Suffix to add when truncated (default: '...')

**Returns:** The truncated string

**Throws:** Error if maxLength is less than suffix length

### `countOccurrences(str: string, searchValue: string, caseSensitive?: boolean): number`

Counts the occurrences of a substring in a string.

**Parameters:**
- `str`: The string to search in
- `searchValue`: The substring to count
- `caseSensitive`: Whether the search should be case-sensitive (default: true)

**Returns:** The number of occurrences

### `isValidEmail(str: string): boolean`

Checks if a string is a valid email address.

**Parameters:**
- `str`: The string to validate

**Returns:** True if the string is a valid email address

### `removeWhitespace(str: string): string`

Removes all whitespace from a string.

**Parameters:**
- `str`: The string to process

**Returns:** The string without whitespace

### `reverse(str: string): string`

Reverses a string.

**Parameters:**
- `str`: The string to reverse

**Returns:** The reversed string

## Development

### Prerequisites

- Node.js >= 18.18.0
- npm >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/string-utils.git
cd string-utils

# Install dependencies
npm install

# Build the project
npm run build
```

### Available Scripts

```bash
# Build TypeScript
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode (useful during development)
npm run test:watch
```

Coverage reports are generated in the `coverage/` directory.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### CI Workflow (runs on every push and PR)

- **Linting**: ESLint and Prettier checks
- **Type Checking**: TypeScript compilation
- **Testing**: Jest tests on Node.js 18, 20, and 22
- **Building**: TypeScript compilation
- **Security Audit**: npm audit for vulnerabilities

### Release Workflow (runs on version tags)

- Runs all CI checks
- Creates GitHub release
- Publishes to npm registry

To create a release:
```bash
# Bump version
npm version patch  # or minor, or major

# Push tag
git push origin --tags

# GitHub Actions will automatically publish
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT © [Your Name]

## Acknowledgments

This project demonstrates modern Node.js library development best practices including:
- TypeScript for type safety
- Jest for testing
- ESLint & Prettier for code quality
- GitHub Actions for CI/CD
- Comprehensive documentation
