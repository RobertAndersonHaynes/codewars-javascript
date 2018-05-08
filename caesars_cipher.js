
function rot13(str) {
  var shiftedString = "";
  for (i =0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
      shiftedString += String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
      shiftedString += String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      shiftedString += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return shiftedString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
