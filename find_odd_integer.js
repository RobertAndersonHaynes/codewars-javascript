// submitted answer
function findOdd(A) {
  const count = A =>
  A.reduce((a, b) =>
  Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

  const odd = dict =>
  Object.keys(dict).filter((a) => dict[a] % 2 != 0)
  let oddNum = odd(count(A))
  return parseInt(oddNum[0]);
}

// scratch
const A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

const count = A =>
  A.reduce((a, b) =>
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

const duplicates = dict =>
  Object.keys(dict).filter((a) => dict[a] % 2 != 0)
let oddNum = duplicates(count(A))
console.log(count(A))
console.log(oddNum)
