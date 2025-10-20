import {
  capitalize,
  toCamelCase,
  toKebabCase,
  truncate,
  countOccurrences,
  isValidEmail,
  removeWhitespace,
  reverse,
} from './index';

describe('capitalize', () => {
  it('should capitalize the first letter of a lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return the same string if already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should only capitalize the first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });
});

describe('toCamelCase', () => {
  it('should convert space-separated words to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  it('should convert hyphen-separated words to camelCase', () => {
    expect(toCamelCase('hello-world-foo')).toBe('helloWorldFoo');
  });

  it('should convert underscore-separated words to camelCase', () => {
    expect(toCamelCase('hello_world_foo')).toBe('helloWorldFoo');
  });

  it('should handle mixed separators', () => {
    expect(toCamelCase('hello-world foo_bar')).toBe('helloWorldFooBar');
  });

  it('should handle already camelCase strings', () => {
    expect(toCamelCase('helloWorld')).toBe('helloworld');
  });

  it('should handle empty strings', () => {
    expect(toCamelCase('')).toBe('');
  });
});

describe('toKebabCase', () => {
  it('should convert camelCase to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
  });

  it('should convert space-separated words to kebab-case', () => {
    expect(toKebabCase('Hello World')).toBe('hello-world');
  });

  it('should convert PascalCase to kebab-case', () => {
    expect(toKebabCase('HelloWorldFoo')).toBe('hello-world-foo');
  });

  it('should handle underscore-separated words', () => {
    expect(toKebabCase('hello_world')).toBe('hello-world');
  });

  it('should handle multiple spaces', () => {
    expect(toKebabCase('hello   world')).toBe('hello-world');
  });

  it('should handle empty strings', () => {
    expect(toKebabCase('')).toBe('');
  });
});

describe('truncate', () => {
  it('should truncate a string longer than maxLength', () => {
    expect(truncate('Hello World', 8)).toBe('Hello...');
  });

  it('should not truncate a string shorter than maxLength', () => {
    expect(truncate('Hello', 10)).toBe('Hello');
  });

  it('should use custom suffix', () => {
    expect(truncate('Hello World', 8, '…')).toBe('Hello W…');
  });

  it('should handle exact maxLength', () => {
    expect(truncate('Hello', 5)).toBe('Hello');
  });

  it('should throw error if maxLength is less than suffix length', () => {
    expect(() => truncate('Hello World', 2)).toThrow(
      'maxLength must be greater than or equal to suffix length'
    );
  });

  it('should handle empty strings', () => {
    expect(truncate('', 5)).toBe('');
  });

  it('should handle empty suffix', () => {
    expect(truncate('Hello World', 5, '')).toBe('Hello');
  });
});

describe('countOccurrences', () => {
  it('should count occurrences of a substring (case-sensitive)', () => {
    expect(countOccurrences('hello world', 'o')).toBe(2);
  });

  it('should count occurrences case-insensitively when specified', () => {
    expect(countOccurrences('Hello World', 'o', false)).toBe(2);
  });

  it('should count occurrences case-sensitively by default', () => {
    expect(countOccurrences('Hello WORLD', 'o', true)).toBe(1);
  });

  it('should return 0 for non-existent substring', () => {
    expect(countOccurrences('hello world', 'x')).toBe(0);
  });

  it('should count overlapping occurrences', () => {
    expect(countOccurrences('aaaa', 'aa')).toBe(2);
  });

  it('should return 0 for empty search value', () => {
    expect(countOccurrences('hello world', '')).toBe(0);
  });

  it('should handle empty strings', () => {
    expect(countOccurrences('', 'test')).toBe(0);
  });

  it('should count whole word occurrences', () => {
    expect(countOccurrences('hello hello world', 'hello')).toBe(2);
  });
});

describe('isValidEmail', () => {
  it('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@example.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@example.com')).toBe(true);
  });

  it('should reject invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('missing@domain')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('user@')).toBe(false);
    expect(isValidEmail('user @example.com')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('removeWhitespace', () => {
  it('should remove all whitespace from a string', () => {
    expect(removeWhitespace('hello world')).toBe('helloworld');
  });

  it('should remove leading and trailing whitespace', () => {
    expect(removeWhitespace('  test  ')).toBe('test');
  });

  it('should remove tabs and newlines', () => {
    expect(removeWhitespace('hello\t\nworld')).toBe('helloworld');
  });

  it('should handle multiple consecutive spaces', () => {
    expect(removeWhitespace('hello     world')).toBe('helloworld');
  });

  it('should handle strings without whitespace', () => {
    expect(removeWhitespace('helloworld')).toBe('helloworld');
  });

  it('should handle empty strings', () => {
    expect(removeWhitespace('')).toBe('');
  });
});

describe('reverse', () => {
  it('should reverse a simple string', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('should reverse a string with spaces', () => {
    expect(reverse('Hello World!')).toBe('!dlroW olleH');
  });

  it('should handle single character strings', () => {
    expect(reverse('a')).toBe('a');
  });

  it('should handle empty strings', () => {
    expect(reverse('')).toBe('');
  });

  it('should handle palindromes', () => {
    expect(reverse('racecar')).toBe('racecar');
  });

  it('should handle strings with special characters', () => {
    expect(reverse('hello@123')).toBe('321@olleh');
  });
});
