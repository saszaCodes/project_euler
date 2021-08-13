/* check only multiples of 20. check only if they are divisible by 19, 18, 17, 16, 15, 14, 13, 11 - if they are divisible by all those numbers, they are divisible by all others in the 1-20 range. */
let i = 1, found = false, num;
while (!found) {
  num = i*20;
  found = num % 19 === 0 && num % 18 === 0 && num % 18 === 0 && num % 17 === 0 && num % 16 === 0 && num % 15 === 0 && num % 14 === 0 && num % 13 === 0 && num % 11 === 0;
  i++;
}
console.log(num);