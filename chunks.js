// submitted answer
function chunkArrayInGroups(arr, size) {
  var newArr = []
  while (arr.length > 0 ) {
    newArr.push(arr.splice(0, size))
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)

// scratch
var sports = ['soccer', 'baseball'];
var total = sports.push(['football', 'swimming']);

console.log(sports);
console.log(total);
