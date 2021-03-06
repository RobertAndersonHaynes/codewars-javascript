// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.
//
// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)
//
// Note: Of course you can't do half a fold. You should know what this means ;P
//
// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language. In Shell please return None).

function foldTo(distance) {
let thickness = .0001
let result = 0
let counter = 0
  if (distance <= 0) {
      return null
  } else if (distance < thickness) {
      return 0
  } else {
    while ( result < distance ) {
      result = thickness * 2
      thickness = result
      counter++
    }
    return counter
  }
}

// best practice

function foldTo(distance) {
  let width = 0.0001;

  if (distance <= 0)
    return null;

  if (distance < width)
    return 0;

  return Math.log2(distance / width * 2) | 0;
}
