# Contributing to String Utils

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## Getting Started

### Prerequisites

- Node.js >= 18.18.0
- npm >= 9.0.0
- Git

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/string-utils.git
   cd string-utils
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/your-username/string-utils.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Make Your Changes

- Write code in the `src/` directory
- Add tests in the same file with `.test.ts` suffix
- Follow existing code style and conventions

### 2. Write Tests

Every new feature or bug fix must include tests:

```typescript
describe('yourFunction', () => {
  it('should do something', () => {
    expect(yourFunction('input')).toBe('expected');
  });

  it('should handle edge cases', () => {
    expect(yourFunction('')).toBe('');
  });
});
```

**Test Coverage Requirements:**
- Minimum 80% coverage for all metrics
- Test happy paths, edge cases, and error conditions

### 3. Run Quality Checks

Before committing, ensure all checks pass:

```bash
# Run all checks
npm run lint        # Check code quality
npm test            # Run tests
npm run build       # Build TypeScript
```

**Fix any issues:**
```bash
npm run lint:fix    # Auto-fix linting issues
npm run format      # Auto-format code
```

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat: add palindrome checker function"
git commit -m "fix: handle empty strings in truncate function"
git commit -m "docs: update API documentation for capitalize"
git commit -m "test: add edge case tests for countOccurrences"
```

### 5. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear description of changes
- Reference any related issues
- Screenshots/examples if applicable

## Code Style Guidelines

### TypeScript

- Use explicit types for function parameters and return values
- Avoid `any` type (use `unknown` if necessary)
- Use interfaces for object shapes
- Document complex logic with comments

**Good:**
```typescript
export function process(input: string): string {
  return input.trim();
}
```

**Bad:**
```typescript
export function process(input: any) {
  return input.trim();
}
```

### Documentation

- Add JSDoc comments for all exported functions
- Include `@param`, `@returns`, `@throws`, and `@example` tags
- Keep examples concise and clear

**Example:**
```typescript
/**
 * Converts a string to uppercase
 * @param str - The string to convert
 * @returns The uppercase string
 * @example
 * ```typescript
 * toUpperCase('hello') // returns 'HELLO'
 * ```
 */
export function toUpperCase(str: string): string {
  return str.toUpperCase();
}
```

### Testing

- Use descriptive test names starting with "should"
- Group related tests with `describe` blocks
- Test happy paths, edge cases, and error conditions
- Keep tests simple and focused

**Example:**
```typescript
describe('capitalize', () => {
  it('should capitalize first letter of lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });
});
```

## Pull Request Process

1. **Ensure CI passes:** All GitHub Actions checks must be green
2. **Update documentation:** If you add/change APIs, update README.md
3. **Add tests:** New features must include tests
4. **One feature per PR:** Keep PRs focused and small
5. **Respond to feedback:** Address review comments promptly

### PR Checklist

Before submitting your PR, verify:

- [ ] Code follows project style guidelines
- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] TypeScript compiles (`npm run build`)
- [ ] Tests added/updated for new functionality
- [ ] Documentation updated (if applicable)
- [ ] Commit messages follow conventional commits
- [ ] No breaking changes (or clearly documented)

## Project Structure

```
string-utils/
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── src/
│   ├── index.ts        # Main library code
│   └── index.test.ts   # Test files
├── dist/               # Compiled output (git-ignored)
├── coverage/           # Test coverage reports (git-ignored)
├── package.json        # Project metadata
├── tsconfig.json       # TypeScript configuration
├── jest.config.js      # Jest configuration
├── eslint.config.mjs   # ESLint configuration
└── README.md           # Project documentation
```

## Need Help?

- **Questions?** Open a [Discussion](https://github.com/your-username/string-utils/discussions)
- **Bug?** Open an [Issue](https://github.com/your-username/string-utils/issues)
- **Feature idea?** Open an [Issue](https://github.com/your-username/string-utils/issues) with the "enhancement" label

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
