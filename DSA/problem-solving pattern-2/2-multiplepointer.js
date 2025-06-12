//sum of pair is zero

//naive approach

function sumzero(arr){
for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===0){
            return [arr[i],arr[j]]
        }
    }
}
}

sumzero([1,0,2,-1,-2])

function twoSum(nums, target) {
  const map = {}; // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  // If no solution found (not expected as per problem statement)
  return [];
}





//countUniqueValues

//[1,1,1,2]
//[i,j]

function countUniqueValues(arr){
    if(arr.length===0)return 0;
    let i=0;
    for(let j=1;j<arr.length;j++){
    if(arr[i]!==arr[j]){
        i++
        arr[i]=arr[j]
    }
}
return i+1
}

countUniqueValues([1,1,1,1,2])


//averagePair
/*
Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals 
the target average.There may be more than one pair that matches the average target.
*/

function averagePair(arr,num){
    let left = 0
    let right = arr.length-1;
    while(left < right){
      let avg = (arr[left]+arr[right]) / 2 
      if(avg === num) return true;
      else if(avg < num) left++
      else right--
    }
    return false;
}

averagePair([1,2,3],2.5) // true
averagePair([-1,0,3,4,5,6], 4.1) // false

//is subsequence

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    // basic while loop
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
     // basic while loop
      j++;
    }
    return false;
  }

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
