// Sequential Search

const DOES_NOT_EXIST = -1;

function generateList(len: number) {
  let array: number[] = [];

  for (let i = 1; i < len + 1; i++) {
    array.push(i);
  }
  return array;
}

function defaultEquals(a: any, b: any) {
  return a === b;
}

// this function returns the position where the element is located
function sequentialSearch(
  array: number[],
  value: number,
  equalsFn = defaultEquals
) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }

  return DOES_NOT_EXIST;
}

function binarySearch(
  sortedArray: number[],
  value: number,
  low: number,
  high: number
) {
  if (high <= low) {
    return DOES_NOT_EXIST;
  }

  let mid = Math.floor((low + high) / 2);

  if (sortedArray[mid] == value) {
    return mid;
  }

  if (sortedArray[mid] > value) {
    return binarySearch(sortedArray, value, low, mid - 1);
  } else {
    return binarySearch(sortedArray, value, mid + 1, high);
  }
}

let list = generateList(10000000);
// Measure time for sequential search
let startTimeSequential = performance.now();
console.log(sequentialSearch(list, 40));
let endTimeSequential = performance.now();
console.log(
  "Sequential search time:",
  endTimeSequential - startTimeSequential,
  "milliseconds"
);

// Measure time for binary search
let startTimeBinary = performance.now();
console.log(binarySearch(list, 40, 0, list.length));
let endTimeBinary = performance.now();
console.log(
  "Binary search time:",
  endTimeBinary - startTimeBinary,
  "milliseconds"
);
