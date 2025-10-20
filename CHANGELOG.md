# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release
- String manipulation utilities: capitalize, toCamelCase, toKebabCase, truncate
- String analysis utilities: countOccurrences, isValidEmail
- String transformation utilities: removeWhitespace, reverse
- Comprehensive test suite with >80% coverage
- TypeScript support with full type definitions
- CI/CD pipeline with GitHub Actions
- Automated npm publishing on version tags

### Changed

### Deprecated

### Removed

### Fixed

### Security

---

## [1.0.0] - YYYY-MM-DD

### Added
- Initial stable release

---

## How to Update This Changelog

When making changes, add entries under the [Unreleased] section:

- **Added**: New features
- **Changed**: Changes to existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security fixes

When releasing a new version:
1. Change [Unreleased] to [version number] with date
2. Add a new [Unreleased] section at the top
3. Update version links at the bottom

Example:
```markdown
## [1.1.0] - 2025-01-15

### Added
- New `isPalindrome` function
- Support for custom truncation suffixes

### Fixed
- Edge case in `countOccurrences` with overlapping matches
```
