/**
 * String utility library demonstrating CI/CD best practices
 * @packageDocumentation
 */

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 * @example
 * ```typescript
 * capitalize('hello') // returns 'Hello'
 * capitalize('HELLO') // returns 'HELLO'
 * ```
 */
export function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns The camelCase string
 * @example
 * ```typescript
 * toCamelCase('hello world') // returns 'helloWorld'
 * toCamelCase('hello-world-foo') // returns 'helloWorldFoo'
 * ```
 */
export function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_: string, char: string) => char.toUpperCase());
}

/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns The kebab-case string
 * @example
 * ```typescript
 * toKebabCase('helloWorld') // returns 'hello-world'
 * toKebabCase('Hello World') // returns 'hello-world'
 * ```
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to add when truncated (default: '...')
 * @returns The truncated string
 * @throws {Error} If maxLength is less than suffix length
 * @example
 * ```typescript
 * truncate('Hello World', 8) // returns 'Hello...'
 * truncate('Hello World', 8, '…') // returns 'Hello W…'
 * ```
 */
export function truncate(str: string, maxLength: number, suffix = '...'): string {
  if (maxLength < suffix.length) {
    throw new Error('maxLength must be greater than or equal to suffix length');
  }

  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Counts the occurrences of a substring in a string
 * @param str - The string to search in
 * @param searchValue - The substring to count
 * @param caseSensitive - Whether the search should be case-sensitive (default: true)
 * @returns The number of occurrences
 * @example
 * ```typescript
 * countOccurrences('hello world', 'o') // returns 2
 * countOccurrences('Hello World', 'o', false) // returns 2
 * countOccurrences('Hello World', 'o', true) // returns 1
 * ```
 */
export function countOccurrences(str: string, searchValue: string, caseSensitive = true): number {
  if (searchValue.length === 0) {
    return 0;
  }

  const searchStr = caseSensitive ? str : str.toLowerCase();
  const searchVal = caseSensitive ? searchValue : searchValue.toLowerCase();

  let count = 0;
  let position = 0;

  while ((position = searchStr.indexOf(searchVal, position)) !== -1) {
    count++;
    position += searchVal.length;
  }

  return count;
}

/**
 * Checks if a string is a valid email address
 * @param str - The string to validate
 * @returns True if the string is a valid email address
 * @example
 * ```typescript
 * isValidEmail('test@example.com') // returns true
 * isValidEmail('invalid-email') // returns false
 * ```
 */
export function isValidEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * Removes all whitespace from a string
 * @param str - The string to process
 * @returns The string without whitespace
 * @example
 * ```typescript
 * removeWhitespace('hello world') // returns 'helloworld'
 * removeWhitespace('  test  ') // returns 'test'
 * ```
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

/**
 * Reverses a string
 * @param str - The string to reverse
 * @returns The reversed string
 * @example
 * ```typescript
 * reverse('hello') // returns 'olleh'
 * reverse('Hello World!') // returns '!dlroW olleH'
 * ```
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}
