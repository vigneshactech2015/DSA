/*
Write a function called maxSubarraySum which accepts an array of integers and a number
called n.The function should calculate the maximum sum of n consecutive elements in the array
maxSubarraySum([1,2,5,2,8,1,5],2) //10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
*/

function maxSubarraySum(arr,num){
let maxSum=0;
let tempSum=0;
if(arr.length<num)return null;
for(let i=0;i<num;i++){
    //suming up of two numbers
    maxSum+=arr[i]
}
    tempSum=maxSum;
for(let i=num;i<arr.length;i++){
    tempSum=tempSum-arr[i-num]+arr[i];
    maxSum=Math.max(maxSum,tempSum);
}
return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


/*
Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
*/

  function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
        // If the current character is already seen, update the start index
      // to the next character after the previously seen occurrence of the current character.
      
        longest = Math.max(longest, i - start + 1);

        // Calculate the length of the current substring by taking the difference
    // between the current index and the start index plus 1.
      seen[char] = i + 1;
    }
    return longest;
  }

  findLongestSubstring('rithmschool');
