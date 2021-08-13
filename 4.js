const numbers = [], palindromes = [];
for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    numbers.push(i*j);
  }
}
for (let i = 0; i < numbers.length; i++) {
  const str = numbers[i].toString();
  const half1 = str.slice(0, Math.floor(str.length/2));
  const half2 = str.slice(Math.ceil(str.length/2)).split("").reverse().join("");
  if (half1 === half2) {
    palindromes.push(Number(str));
  }  
}
let largestPalindrome = palindromes[0];
for (let i = 0; i < palindromes.length; i++) {
  if (palindromes[i] > largestPalindrome) {
    largestPalindrome = palindromes[i];
  }
}
console.log(largestPalindrome);