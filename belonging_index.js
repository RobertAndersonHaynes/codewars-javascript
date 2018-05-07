// submitted answer
function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  var resultArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num ) {
      resultArr.push(arr.indexOf(arr[i]));
    } else {
      resultArr.push(arr.length);
    }
  }
  console.log(resultArr.sort());
  return resultArr.sort()[0];
}

// scratch
getIndexToIns([2, 5, 10], 15)

getIndexToIns([5, 3, 20, 3], 5)
// getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35)

console.log([5, 3, 20, 3].sort());


function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  var resultArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num ) {
      resultArr.push(arr.indexOf(arr[i]));
    } else {
      resultArr.push(arr.indexOf(arr[i]) + 1);
    }
  }
  sortedArr = resultArr.sort(function(a, b) {
    return b - a;
  })
  console.log(sortedArr);
  return sortedArr[0];
}
