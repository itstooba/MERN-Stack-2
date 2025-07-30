let number = prompt("Enter a number:");
let root = Math.sqrt(num);

if (root == Math.floor(root)) {
  alert(num + " is a perfect square.");
} else {
  alert(num + " is not a perfect square.");
}






let num = prompt("Enter a number:");
num = Number(num);
let isPrime = true;

if (num <= 1) {
  isPrime = false;
}

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  alert(num + " is a prime number.");
} else {
  alert(num + " is not a prime number.");
}

let start = Number(prompt("Enter start number:"));
let end = Number(prompt("Enter end number:"));

for (let num = start; num <= end; num++) {
  let isPrime = true;

  if (num <= 1) isPrime = false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}




let n = Number(prompt("Enter how many terms:"));
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}
