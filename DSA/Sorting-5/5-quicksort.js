Quick Sort is another divide-and-conquer algorithm that works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. It follows the following steps:

    Choose a pivot element from the array.
    Partition the array such that all elements less than the pivot are placed before it, and all elements greater than the pivot are placed after it.
    Recursively apply Quick Sort to the two sub-arrays created from the partition.

 //Time Complexity -->O(n log(n))
    //Space Complexity --> O(log(n))
    
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, low, high);

    // Recursively apply Quick Sort to the sub-arrays
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  // Choose the rightmost element as the pivot
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const array = [8, 4, 2, 10, 5, 1];
const sortedArray = quickSort


//Comparison between quick and merge sort
1.Merge sort is a stable alogrithm meaning it maintains the relative order of elements with equal values
2.Merge sort has a guaranteed worst case scenario
3.Quick sort has lower space complexity --> since it does inplace sorting
4.Quick sort has better average case scenario
4.For smaller array --> merge sort may not be optimized but for larger and totally random and unsorted array merge sort is effficient
  
  
  
  
