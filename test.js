import assert from 'node:assert/strict'
import test from 'node:test'
import {ccount} from './index.js'

test('ccount(value, character)', function () {
  // @ts-expect-error: incorrect value.
  assert.equal(ccount(true, 't'), 1, 'should coerce to string')

  assert.throws(
    function () {
      // @ts-expect-error: incorrect value.
      ccount(true, 0)
    },
    /Expected character/,
    'should throw when character is invalid (#1)'
  )

  assert.equal(ccount('', 'f'), 0)
  assert.equal(ccount('foo', 'o'), 2)
  assert.equal(ccount('fo fooo fo', 'o'), 5)
  assert.equal(ccount('ooo', 'o'), 3)
  assert.equal(ccount('a🤔b🤔c', '🤔'), 2)
})
