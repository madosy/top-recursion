function mergeSort(inputArray) {
  if (inputArray.length == 1) return inputArray;
  else {
    let midIndex = Math.floor(inputArray.length / 2);
    let firstHalf = mergeSort(inputArray.slice(0, midIndex));
    let secondHalf = mergeSort(inputArray.slice(midIndex));
    let firstHalfLength = firstHalf.length;
    let finalArray = [];

    for (let i = 0; i <= firstHalfLength * 2; i++) {
      if (firstHalf.length < 1 || secondHalf.length < 1) {
        finalArray.push(...firstHalf);
        finalArray.push(...secondHalf);
        return finalArray;
      } else if (firstHalf[0] < secondHalf[0]) {
        finalArray.push(firstHalf.shift());
      } else {
        finalArray.push(secondHalf.shift());
      }
    }
  }
}

console.log(mergeSort([9, 7, 8, 3, 2, 1]));
