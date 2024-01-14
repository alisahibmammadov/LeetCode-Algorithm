function binary(array, target) {
  let left = 0;
  let right = array[array.length - 1];

  while (left <= right) {
    const mid = Math.floor((right - left) / 2);
    if (array[mid] === target) {
      return mid;
    } else {
      if (target > array[mid]) {
        left = left + mid;
      } else {
        right = right - mid;
      }
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 11;
const index = binary(array, target);
console.log(index);
