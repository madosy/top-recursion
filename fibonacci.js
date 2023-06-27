function fibs(count) {
  let fibonacciArray = [];
  let nMinus2 = 0;
  let nMinus1 = 1;
  let value = 0;

  for (let i = 0; i < count; i++) {
    if (i == 0) value = 0;
    else if (i == 1) value = 1;
    else {
      value = nMinus1 + nMinus2;
      nMinus2 = nMinus1;
      nMinus1 = value;
    }
    fibonacciArray.push(value);
  }
  return fibonacciArray;
}

function fibsRec(count) {
  if (count <= 1) return [0];
  if (count == 2) return [0, 1];
  let prev = fibsRec(count - 1);
  let final = prev.concat(prev[prev.length - 1] + prev[prev.length - 2]);
  return final;
}
