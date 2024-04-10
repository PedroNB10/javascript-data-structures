function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomList(length: number, min: number, max: number) {
  let randomList: number[] = [];
  for (let i = 0; i < length; i++) {
    randomList.push(getRandomNumber(min, max));
  }
  return randomList;
}

// Sort Methods
function selectionSort(list: number[]) {
  let indexOfMinimimumNumber;
  for (let i = 0; i < list.length; i++) {
    indexOfMinimimumNumber = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[indexOfMinimimumNumber]) {
        let aux = list[j];

        list[j] = list[indexOfMinimimumNumber];
        list[indexOfMinimimumNumber] = aux;
      }
    }
  }
}

function bubbleSort(list: number[]) {
  for (let i = 0; i < list.length; i++) {
    for (let j = list.length - 1; j >= 0; j--) {
      if (list[j] < list[j - 1]) {
        [list[j], list[j - 1]] = [list[j - 1], list[j]];
      }
    }
  }
}

// The script is run directly, rather than being imported as a module
if (typeof require !== "undefined" && require.main === module) {
  let randomList = generateRandomList(10, 0, 100);
  console.log(randomList);
  bubbleSort(randomList);
  console.log(randomList);
}
