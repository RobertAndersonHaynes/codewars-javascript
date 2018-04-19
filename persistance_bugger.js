// submitted answer
function persistence(num) {
  str = num.toString();
  numArr = []
  counter = 0
  for (var i = 0; i < str.length; i++) {
    numArr.push(parseInt((str.charAt(i))));
  }
  product = numArr.reduce((a, b) => a * b, 1);
  while (numArr.length > 1) {
    productStr = product.toString();
    numArr.splice(0, numArr.length);
    for (var i = 0; i < productStr.length; i++) {
      numArr.push(parseInt((productStr.charAt(i))));
    }
    product = numArr.reduce((a, b) => a * b, 1);
    counter += 1
  }
  return counter;
}

// scratch
var s = "39";
let numArr = []
let counter = 0
for (var i = 0; i < s.length; i++) {
  numArr.push(parseInt((s.charAt(i))));
}
product = numArr.reduce((a, b) => a * b, 1);
while (numArr.length > 1) {
  productStr = product.toString();
  numArr.splice(0, numArr.length);
  for (var i = 0; i < productStr.length; i++) {
    numArr.push(parseInt((productStr.charAt(i))));
  }
  product = numArr.reduce((a, b) => a * b, 1);
counter += 1
}

console.log(counter);
console.log(numArr);
console.log(product);
// console.log(numArr);
// console.log(newProduct);
