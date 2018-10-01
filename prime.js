module.exports = (number) => {
  //   if (number % 2 === 0 && number !== 2) {
  //     return false
  //   }
  //   if (number % 3 === 0 && number !== 3) {
  //     return false;
  //   }
  //   return true

  if (number === 1) {
    return false;
  }
  else if (number === 2) {
    return true;
  }
  else {
    for (var x = 2; x < number; x++) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;
  }
}

// function getPrimes(max) {
//     var sieve = [], i, j, primes = [];
//     for (i = 2; i <= max; i++) {
//         console.log(i)
//         if (!sieve[i]) {
//             // i has not been marked -- it is prime
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) {
//                 sieve[j] = true;
//             }
//         }
//     }
//     return primes;
// }

// console.log(getPrimes(5))
function prime(n) {

  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  var arr = [2];
  for (var i = 3; i <= n; i += 2) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  console.log(arr)
}

console.log(prime(100));

function fibonacci(num) {
	return (num <= 1) ? 1 : fibonacci(num -1) + fibonacci(num -2);
}

console.log(fibonacci(2));
