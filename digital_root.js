// submitted answer
function digital_root(n) {
  str = n.toString(),
  chain = []
  for (var i = 0; i < s.length; i++) {
    chain.push(parseInt((s.charAt(i))));
  }
  sum = chain.reduce((a, b) => a + b, 0);
  newSum = sum.toString()
  newChain = []
  if (newSum.length > 1) {
    for (var i = 0; i < newSum.length; i++) {
      newChain.push(parseInt((newSum.charAt(i))));
    }
  }
  sum = newChain.reduce((a, b) => a + b, 0)
  return(sum);
}

// scratch
var s = "1024";
let chain = ""
for (var i = 0; i < s.length; i++) {
    chain += (s.charAt(i) + s.charAt(i+1));
}

var s = "189";
let chain = []
for (var i = 0; i < s.length; i++) {
  chain.push(parseInt((s.charAt(i))));
}
sum = chain.reduce((a, b) => a + b, 0);
newSum = sum.toString()
newChain = []
if (newSum.length > 1) {
  for (var i = 0; i < newSum.length; i++) {
    newChain.push(parseInt((newSum.charAt(i))));
  }
}
sum = newChain.reduce((a, b) => a + b, 0)
console.log(sum);

n = 189


  // working
  function digital_root(n) {
  str = n.toString(),
  chain = []
  if (str.length != 1) {
    for (var i = 0; i < str.length; i++) {
      chain.push(parseInt((str.charAt(i))));
    }
  }
    let sum = chain.reduce((a, b) => a + b, 0);
  return(sum);
}
