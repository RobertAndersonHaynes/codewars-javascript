// submitted answer
function destroyer(arr) {
  var arr1 = arguments[0]
  var forDeletion = [];
  for (var i = 1; i < arguments.length; i++) {
    forDeletion.push(arguments[i]);
  }
  result = arr1.filter(item => !forDeletion.includes(item));
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
