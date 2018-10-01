const assert = require('assert')
const isPrime = require('./prime')

// Prime numbers 
// Divisble by itself AND 1 and nothing else
// 



describe('prime number thing', () => {

  it('returns true for 2', () => {
    assert.strictEqual(isPrime(2), true)
  });
  
  it('returns false for 4', () => {
    assert.strictEqual(isPrime(4), false)
  });
  
  it('return false if 6', () => {
      assert.strictEqual(isPrime(6), false);
  });

  it('returns true that 5 is a prime number', () => {
      assert.strictEqual(isPrime(5), true);
  });

  it('returns true as 3 is a prime number', () => {
      assert.strictEqual(isPrime(3), true);
  })
  it('return false for 9', () => {
      assert.strictEqual(isPrime(9), false);
  })
  it('returns false for 25', () => {
      assert.strictEqual(isPrime(25), false);
  })



});

