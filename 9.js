// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let result;
for (let c = 501; c < 1000; c++) {
  const b = (-c + 1000 + Math.sqrt(c*c + 2000*c - 1000000))/2;
  const a = Math.sqrt(c*c - b*b);
  console.log([a, b, c])
  if (c === 999) {
    console.log("c = 999 calculated")
  }
  if (a + b < c && a < b && b < c && a > 0 && b > 0) {
    result = a*b*c;
    console.log(result)
    break;
  }
}
