// submitted answer
function mutation(arr) {
  arr1 = arr[0].toLowerCase();
  arr2 = arr[1].toLowerCase().split("");
  var check = []
  arr2.forEach(function(e) {
    if ((arr1.indexOf(e)) < 0) {
      check.push("false");
    } else {
      check.push("true");
    }
  })
  if (check.indexOf("false") >= 0) {
    return false;
  } else {
    return true;
  }
}

mutation(["hello", "neo"]);

mutation(["Mary", "Army"]);

mutation(["hello", "Hello"]);

mutation(["Alien", "line"]);
