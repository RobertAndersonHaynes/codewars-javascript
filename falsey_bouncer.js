// submitted answer
function bouncer(arr) {
  trueArr = [];
  arr.forEach(function(e) {
    if (Boolean(e) != false) {
      trueArr.push(e);
    }
  });
  return trueArr;
}

bouncer([7, "ate", "", false, 9]);
