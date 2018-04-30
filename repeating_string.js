repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3)

function repeatStringNumTimes(str, num) {
  var newString = ""
  var newNum = num
  while (newNum > 0) {
    newString += str;
    newNum--
  }
  return newString;
}
