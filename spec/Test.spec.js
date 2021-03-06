const positiveSum = require('../positiveSum')
const opposite = require('../opposite.js')
const removeChar = require('../Remove First and Last Character.js')
const repeatStr = require('../String repeat')
test('Positive Sum', () => {
  expect(positiveSum([1,-4,7,23])).toBe(31)
  expect(positiveSum([])).toBe(0)
  expect(positiveSum([1,2,3,4,5])).toBe(15)
  expect(positiveSum([0,0,0])).toBe(0)
})
test('Opposite', () => {
  expect(opposite(10)).toBe(-10)
  expect(opposite(0)).toBe(0)
  expect(opposite(-24)).toBe(24)
  expect(opposite(2.3)).toBe(-2.3)
})
test('Remove First and Last Character', () => {
  expect(removeChar('Hello')).toBe('ell')
  expect(removeChar('function')).toBe('unctio')
  expect(removeChar('123456')).toBe('2345')
  expect(removeChar('ab')).toBe('')
})
test('String repeat', () => {
  expect(repeatStr(6, 'I')).toBe('IIIIII')
  expect(repeatStr(5, 'Hello')).toBe('HelloHelloHelloHelloHello')
  expect(repeatStr(2, 'red')).toBe('redred')
  expect(repeatStr(9, 'Fl')).toBe('FlFlFlFlFlFlFlFlFl')
})
