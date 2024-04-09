function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomList(length: number, min: number, max: number) {
  let randomList: number[] = [];
  for (var i = 0; i < length; i++) {
    randomList.push(getRandomNumber(min, max));
  }
  return randomList;
}

// Sort Methods
function selectionSort(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

// The script is run directly, rather than being imported as a module
if (typeof require !== "undefined" && require.main === module) {
  let randomList = generateRandomList(10, 0, 100);
  console.log(randomList);
  //selectionSort(randomList);
}
