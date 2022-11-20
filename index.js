/**
 * Get the count of `substring` in `value`.
 *
 * @param {string} value
 *   Content to search in.
 * @param {string} substring
 *   Substring to look for, typically one character.
 * @returns {number}
 *   Count of `substring`s in `value`.
 */
export function ccount(value, substring) {
  const source = String(value)

  if (typeof substring !== 'string') {
    throw new TypeError('Expected character')
  }

  let count = 0
  let index = source.indexOf(substring)

  while (index !== -1) {
    count++
    index = source.indexOf(substring, index + substring.length)
  }

  return count
}
