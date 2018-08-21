// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor
//
// N is less than or equal to bound
//
// N is greater than 0.
//
// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found .

function maxMultiple(divisor, bound) {
  for (bound; bound > 0; --bound) {
   if ((bound / divisor) % 1 === 0) {
    return bound
    }
  }
  return 0
}

// best practice

function maxMultiple(divisor, bound){
  return bound-bound%divisor
}
