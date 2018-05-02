// submitted answer
function truncateString(str, num) {
  var newStr = "";
  if (num <= 3) {
  newStr += str.slice(0, (num));
  newStr += "...";
} else if (str.length > num) {
  newStr += str.slice(0, num-3);
  newStr += "...";
} else {
  newStr += str.slice(0, num);
}
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-", 1)
