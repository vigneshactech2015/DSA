Merge Sort:
Merge Sort is a divide-and-conquer algorithm that works by recursively dividing the input array into smaller halves, sorting them, and then merging them back together to obtain a sorted array. It follows the following steps:

    Divide: Split the input array into two halves.
    Recursively sort the two halves using Merge Sort.
    Merge: Merge the sorted halves to obtain a single sorted array.

    
//Time complexity --> O(n log(n))
    //Space complexity --> O(n)

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from either left or right array
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const array = [8, 4, 2, 10, 5, 1];
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);
