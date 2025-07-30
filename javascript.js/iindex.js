let num = prompt("Enter a number:");
let root = Math.sqrt(num);

if (root == Math.floor(root)) {
  alert(num + " is a perfect square.");
} else {
  alert(num + " is not a perfect square.");
}