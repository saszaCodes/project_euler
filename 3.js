/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// find next prime

// // check if number is a prime

function isPrime(n) {
  if (Number.isInteger(n/2) && n/2 !== 1) {
    return false;
  }
  if (Number.isInteger(n/3) && n/3 !== 1) {
    return false;
  }
  let k = 1;
  while (6*k - 1 < n) {
    if (Number.isInteger(n/(6*k - 1))) {
      return false;
    }
    if (Number.isInteger(n/(6*k + 1)) && n/(6*k + 1) !== 1) {
      return false;
    }
    k++;
  }
  return true;
}

function nextPrime(p) {
  if (!isPrime(p)) {
    throw Error("Given number is not a prime");
  }
  let n = p + 1;
  while (!isPrime(n)) {
    n++;
  }
  return n;
}

function findLargestPrime(n) {
  let m = n;
  let p = 2;
  while (m !== 1) {
    while (Number.isInteger(m/p)) {
      m = m/p;
    }
    if (m !== 1) {
      p = nextPrime(p);
    }
  }
  return p;
}
findLargestPrime(600851475143);