const maxCombine = require('./largest-int-from-concatenated-ints')
const assert = require('assert')

describe('Tests', function () {
  it('maxCombine should be a function.', function () {
    assert(typeof maxCombine === 'function')
  })
  it('maxCombine([1, 3, 3, 4, 55]) should return a number.', function () {
    assert(typeof maxCombine([1, 3, 3, 4, 55]) === 'number')
  })
  it('maxCombine([1, 3, 3, 4, 55]) should return 554331.', function () {
    assert.strictEqual(maxCombine([1, 3, 3, 4, 55]), 554331)
  })
  it('maxCombine([71, 45, 23, 4, 5]) should return 71545423.', function () {
    assert.strictEqual(maxCombine([71, 45, 23, 4, 5]), 71545423)
  })
  it('maxCombine([14, 43, 53, 114, 55]) should return 55534314114.', function () {
    assert.strictEqual(maxCombine([14, 43, 53, 114, 55]), 55534314114)
  })
  it('maxCombine([1, 34, 3, 98, 9, 76, 45, 4]) should return 998764543431.', function () {
    assert.strictEqual(maxCombine([1, 34, 3, 98, 9, 76, 45, 4]), 998764543431)
  })
  it('maxCombine([54, 546, 548, 60]) should return 6054854654.', function () {
    assert.strictEqual(maxCombine([54, 546, 548, 60]), 6054854654)
  })
})
