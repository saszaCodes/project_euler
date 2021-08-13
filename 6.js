let sumOfSquares = 0, sum, asquareOfSum;
for (let i = 1; i <= 100; i++) {
  sumOfSquares += i * i;
}
sum = (((1 + 100) / 2) * 100);
squareOfSum = sum * sum;
console.log(squareOfSum - sumOfSquares);