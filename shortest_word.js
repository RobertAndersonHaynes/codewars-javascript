// submitted answer
function findShort(s){
  let stringSplit = s.split(/\s+/);
  let shortest = stringSplit.sort(function(a, b) {
  return a.length - b.length;
});
  return shortest[0].length;
}
