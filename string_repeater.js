// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times.

function repeater(string, n){
  var i;
  var output = ""
  for (i = 0; i < n; i++) {
    output += string
  }
  return output
}

// best practice

function repeater(string, n){
  return string.repeat(n)
}
