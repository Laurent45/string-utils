# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript library demonstrating modern Node.js package development with CI/CD best practices. It serves as an educational example for managing a Node.js project with Git/GitHub and automated workflows.

## Architecture

**Library Structure:**
- Single-file library (`src/index.ts`) exporting utility functions
- Tests co-located in `src/index.test.ts`
- All functions are pure, stateless, and independently testable
- Zero runtime dependencies

**Build Pipeline:**
- TypeScript → JavaScript (CommonJS)
- Generates type declarations (`.d.ts`)
- Output directory: `dist/`

## Development Commands

### Building & Testing
```bash
npm run build          # Compile TypeScript to dist/
npm test               # Run Jest tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with coverage report
```

### Code Quality
```bash
npm run lint           # Check code with ESLint
npm run lint:fix       # Auto-fix ESLint issues
npm run format         # Format code with Prettier
npm run format:check   # Check if code is formatted
```

### Type Checking
```bash
npx tsc --noEmit       # Type check without building
```

## Configuration Files

**TypeScript (`tsconfig.json`):**
- Target: ES2022
- Module: CommonJS
- Strict mode enabled
- Compiles `src/` → `dist/`

**ESLint (`eslint.config.mjs`):**
- Uses flat config (ESLint 9+)
- TypeScript ESLint with type-aware rules
- Prettier integration for formatting
- Project service for automatic tsconfig detection

**Jest (`jest.config.js`):**
- Uses ts-jest preset
- Coverage thresholds: 80% for all metrics
- Tests run in Node.js environment

**Prettier (`.prettierrc.json`):**
- Single quotes
- 2-space indentation
- Semicolons required
- 100 character line width

## CI/CD Workflows

### CI Workflow (`.github/workflows/ci.yml`)

**Triggers:** Every push and pull request

**Jobs:**
1. **Lint**: ESLint and Prettier checks
2. **Build**: TypeScript compilation
3. **Test**: Jest tests on Node.js 18, 20, and 22 (parallel)
4. **Type Check**: TypeScript type checking
5. **Audit**: Security vulnerability scan
6. **CI Success**: Aggregates all results

**Matrix Testing:** Tests run on multiple Node.js versions in parallel to ensure compatibility.

### Release Workflow (`.github/workflows/release.yml`)

**Trigger:** Git tags matching `v*` (e.g., `v1.0.0`)

**Process:**
1. Run all CI checks
2. Build package
3. Create GitHub release
4. Publish to npm registry

**To create a release:**
```bash
npm version patch    # Bump version (or minor/major)
git push origin v1.0.0  # Push tag
```

## Testing Strategy

**Test Structure:**
- One test file per source file (`.test.ts` suffix)
- Use `describe` blocks to group related tests
- Use `it` for individual test cases
- Test naming: "should [expected behavior]"

**Coverage Requirements:**
- 80% minimum for branches, functions, lines, and statements
- Tests must cover happy paths, edge cases, and error conditions

**Example Test Pattern:**
```typescript
describe('functionName', () => {
  it('should handle normal case', () => {
    expect(functionName('input')).toBe('expected');
  });

  it('should handle edge case', () => {
    expect(functionName('')).toBe('');
  });

  it('should throw on invalid input', () => {
    expect(() => functionName(null)).toThrow();
  });
});
```

## Git Workflow

**Branch Strategy:**
- `main`: Production-ready code
- Feature branches: `feature/description`
- Bug fixes: `fix/description`

**Commit Convention:**
Follow Conventional Commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `test:` Tests
- `refactor:` Code refactoring
- `chore:` Maintenance

## Common Development Tasks

### Adding a New Function

1. Add function to `src/index.ts` with JSDoc documentation
2. Add comprehensive tests to `src/index.test.ts`
3. Run `npm test` to verify tests pass
4. Run `npm run build` to ensure it compiles
5. Run `npm run lint` to check code quality
6. Update README.md API documentation section

### Fixing a Bug

1. Write a failing test that reproduces the bug
2. Fix the bug in source code
3. Verify test now passes
4. Run full test suite and linting
5. Commit with `fix:` prefix

### Releasing a New Version

1. Ensure `main` branch is up to date
2. Run `npm version [patch|minor|major]`
3. Push tag: `git push origin v1.0.0`
4. GitHub Actions handles the rest

## Important Notes

**Package Publishing:**
- Package name is scoped: `@your-username/string-utils`
- Requires npm token in GitHub secrets: `NPM_TOKEN`
- Only `dist/` folder is published (see `files` in package.json)
- `prepare` script runs automatically before publishing

**Dependencies:**
- Zero runtime dependencies (keep it that way!)
- All dependencies are devDependencies (build tools)
- Run `npm audit` regularly for security

**ESLint Flat Config:**
- Uses new flat config format (`.mjs` file with ES modules)
- Incompatible with old `.eslintrc.json` format
- Requires ESLint 9+

## Troubleshooting

**TypeScript errors after npm install:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tests failing locally but passing in CI:**
- Check Node.js version matches CI (18+)
- Clear Jest cache: `npx jest --clearCache`

**Linting errors:**
- Auto-fix: `npm run lint:fix`
- Format: `npm run format`

**Coverage below threshold:**
- Run `npm run test:coverage` to see report
- Open `coverage/index.html` in browser for detailed view
