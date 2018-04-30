// submitted answer
confirmEnding("Open sesame", "same");

function confirmEnding(str, target) {
  let start = (str.length-target.length)
  let length = target.length
  let ending = str.substr(start,length);
  console.log(ending);
  if (ending === target) {
    return true
  } else {
    return false
  }
}
