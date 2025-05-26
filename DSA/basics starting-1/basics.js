// reverse string using recursion
const str = 'vignesh'

function reverseStr (input,index) {
  if(index<0) return ''
  return input[index] + reverseStr(input,index-1)
}

console.log(reverseStr(str,str.length-1))

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("aabbcdeff")) // c
// Find the missing number
const findMissingNumber = (arr) => {
  let result = []; 
for(let i=1;i<=arr.length+1;i++){
   if(arr.indexOf(i) === -1){
    result.push(i);  
    }
 }
  return result;
}

console.log(findMissingNumber([1,2,6,5]))


// Longest subarray with sum zero

function longestZeroSumSubarray(arr) {
    let maxLength = 0; // Variable to store the length of the longest subarray with sum 0
    let sum = 0;       // Variable to store the cumulative sum
    let sumIndexMap = {}; // HashMap to store the cumulative sum and its first occurrence index

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Update cumulative sum

        if (sum === 0) {
            // If cumulative sum is zero, subarray from start to current index has sum 0
            maxLength = i + 1; // Update maxLength
        }

        if (sumIndexMap.hasOwnProperty(sum)) {
            // If this cumulative sum has been seen before
            let length = i - sumIndexMap[sum]; // Calculate length of subarray with sum 0
            maxLength = Math.max(maxLength, length); // Update maxLength if this length is greater
        } else {
            // Store the first occurrence of this cumulative sum
            sumIndexMap[sum] = i;
        }
    }

    return maxLength; // Return the length of the longest subarray with sum 0
}

// Example usage
const array = [1, 2, -2, -1, 2, -2, 1, 1];
console.log(longestZeroSumSubarray(array)); // Output will be the length of the longest subarray with sum 0

// Finding all subset/powerset in an array

const input = [1,2,3]

// output = [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

function subset (array) {
    const result = [[]]
    for(let val of array){
        const length = result.length
        for(let i=0;i<length;i++){
        let temp = result[i].slice()
        temp.push(val)
        result.push(temp)
    }
    }
    return result
}

subset(input)

// Finding all subset sum in an array using Recursion

function getAllSubsetSums(arr) {
    const results = new Set(); // Use a set to avoid duplicate sums
    function findSubsetSums(index, currentSum) {
        if (index === arr.length) {
            results.add(currentSum); // Add the current subset sum to results
            return;
        }
        // Include the current element in the subset
        findSubsetSums(index + 1, currentSum + arr[index]);
        // Exclude the current element from the subset
        findSubsetSums(index + 1, currentSum);
    }
    findSubsetSums(0, 0); // Start recursion with the first index and initial sum of 0
    return Array.from(results); // Convert set to array
}
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

// Example usage
const array = [1, 2, 3];
console.log(getAllSubsetSums(array)); // Output will be all unique subset sums

// Maximum subarray sum 

//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

const maxSubArray = (nums) => {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity
    let currentSum = 0
    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){ 
        //cumulating answers to the top
        
        //compare currentSum add current number 
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i])
        
        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum)
        
    }
    return maxSum
}

//Reversing a string

function reversingstring(str){
let reversed=''
for(let i=str.length-1;i>=0;i--){
    reversed=reversed+str[i]
}
return reversed
}

reversingstring('hello world')

//shuffle

function shuffle(nums) {
    let res = []
    let n=nums.length/2
    for(let i = 0; i < n; i++){
        res.push(nums[i], nums[i+n])
    }
    return res
};
console.log(shuffle([2,5,1,3,4,7]))

//output [2,3,5,4,1,7]


function Unique(arr){
  let obj={}
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
      delete obj[arr[i]]
    }else{
      obj[arr[i]]=arr[i]
    }
  }
  return Object.values(obj)
}

console.log(Unique([1,1,2,4,5]))


//remove vowel

function vowelremoval(s){
    let result=''
    for(let i=0;i<s.length;i++){
    //if(['a','e','i','o','u'].includes(s[i]))
    if(s[i]==="a"||s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]==="u"){
    continue    
    }
        result=result+s[i]
    }
    return result
}

console.log(vowelremoval("leetcodeisaplatformforcoders"))


//Analyse Pattern

input="a1b10"
output="abbbbbbbbbb"

function pattern(s){
    let result=[]
    let num=s.match(/\d+/g);
    let nums=num.map((num)=>parseInt(num))
    let str=s.match(/[a-zA-Z]+/g)
    for(let i=0;i<str.length;i++){
        for(let j=0;j<nums[i];j++){
            result.push(str[i])
        }
    }
    return result.join("")
}

//prime number

function prime(num){
  for(let i=2;i<=num-1;i++){
    let flag = true
    if(num % i == 0){
      flag = false
    }
    if(flag){
      return "it is prime"
    }else{
      return "it is not prime"
    }
  }
}

console.log(prime(8))

//Matrix
function matrix(){
  let output = []

  for(let i=0;i<3;i++){
     output[i] = []
  for(let j=0;j<3;j++){
     output[i][j] = 1
  }
}
  return output
}

console.log(matrix())

var transpose = function(matrix) {
    for(let r=0;r<matrix.length;r++){
        for(let c=0;c<r;c++){
          [matrix[r][c],matrix[c][r]] = [matrix[c][r],matrix[r][c]]
        }
    }
    return matrix
};

function nearestSmallertoLeft(arr){
  let result=[]
  let flag = false
  for(let i=0;i<arr.length;i++){
      //remember -1 this part alone
    for(let j=i-1;j>-1;j--){
      if(arr[i]>arr[j]){
        result.push(arr[j])
        flag = true
        break
      }
    }
    if(!flag){
      result.push(-1)
    }
  }
  return result
}

console.log(nearestSmallertoLeft([5,4,3,2,1]))

function nearestLargesttoRight(arr){
  let result = []
  for(let i=0;i<arr.length;i++){
    let next = -1;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]>arr[i]){
        next = arr[j]
        break
      }
    }
  result.push(next)
}
return result
}

console.log(nearestLargesttoRight([1,2,3,4,5]))

//flatten array with recursion
function flatten(arr){
    let flattened = []
    for(let i=0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
     flattened.push(...flatten(arr[i]))   
     }else{
      flattened.push(arr[i])   
     }
    }
    return flattened
}

//using inbuilt 
arr.flat(Infinity)


//Flatten object using recursion

function flattenObject(obj, parent) {
    const finalObj = {}
    const generateFlatObjects = (obj, parent) => {
        for (let key in obj) {
            const newParent = parent+key
            const value = obj[key]
            if(typeof value === 'object') {
                generateFlatObjects(value, newParent+".")
            } else {
                finalObj[newParent] = value
            }
        }
    }
    generateFlatObjects(obj, parent)
    return finalObj
}

const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };

console.log(flattenObject(obj, ""))

var flat = function (arr, n) {
    if(n === 0) return arr
    let result = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...flat(arr[i],n-1))
        }else{
            result.push(arr[i])
        }
    }
    return result
};

//Find the smallest subarray having a sum larger than a given number
//Time Complexity --> O(n)
//Space Complexity --> O(1)
//1 --> two pointer and sliding window approach
function findSmallestSubarray(arr, target) {
  let minLength = Infinity;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum > target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Example usage:
const array = [4, 2, 2, 7, 8, 1, 2, 8, 10];
const targetSum = 14;
const smallestSubarrayLength = findSmallestSubarray(array, targetSum);
console.log("Smallest subarray length:", smallestSubarrayLength);

const threeSum = (arr) => {
  const result = []
  for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.length-1;j++){
      for(let k=j+1;k<arr.length;k++){
        const sum = arr[i]+arr[j]+arr[k]
        if(sum === 0){
          result.push([arr[i],arr[j],arr[k]])
        }
      }
    }
  }
  return result.length
}

const input = [1,-1,0,2,-2,3,-3]

console.log(threeSum(input))

//using sorting and two pointer approach
//Time Complexity O(n^2)
//Space Complexity O(1)
var threeSum = function(nums) {
    let result=[]
    if(nums.length<3)return []
    nums.sort((a,b)=>a-b)
    //see this
    for(let i=0;i<nums.length-2;i++){
    //to remove duplicates we check i>0 
        if(i>0 && nums[i]===nums[i-1])continue
        let left = i+1
        let right = nums.length-1
        while(left<right){
        let sum = nums[i]+nums[left]+nums[right]
        if(sum===0){
          result.push([nums[i],nums[left],nums[right]])
    ////to remove duplicates we check this
          while(nums[left]===nums[left+1])left++
          while(nums[right]===nums[right-1])right--
          left++
          right--
        }else if(sum<0)left++
        else right--
        }
    }
    return result
};


//3.Find Prime number from 1 to 100
//Time Complexity --> O(1) -->if specific number is given
//Space Complexity --> O(1) 

//In general (if specific number is not given)
//Time Complexity --> O(n log(log(n))
//Space Complexity --> O(n) 
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimes(start, end) {
  const primes = [];

  for (let number = start; number <= end; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }

  return primes;
}

// Example usage:
const start = 1;
const end = 100;
const primeNumbers = findPrimes(start, end);
console.log("Prime numbers:", primeNumbers);

//Find GCD using recursion
//Time Complexity O(log max(a,b))
//Space Complexity O(log max(a,b))
function findGCD(a, b) {
  // Ensure positive values
  a = Math.abs(a);
  b = Math.abs(b);

  // Base case: if b is 0, return a
  if (b === 0) {
    return a;
  }

  // Recursive case: call the function with b and the remainder of a divided by b
  return findGCD(b, a % b);
}

// Example usage:
const num1 = 24;
const num2 = 36;
const gcd = findGCD(num1, num2);
console.log("GCD:", gcd);


//Find gcd using Euclidean algortithm

function findGCD(a, b) {
  // Ensure positive values
  a = Math.abs(a);
  b = Math.abs(b);

  // Use the Euclidean algorithm
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

// Example usage:
const num1 = 24;
const num2 = 36;
const gcd = findGCD(num1, num2);
console.log("GCD:", gcd);

//maxSubArraySum 
function getMaxSubSum(arr){

  let maxSum = 0
  let tempSum = 0
  for(let i=0;i<arr.length;i++){
    tempSum = tempSum + arr[i]
    maxSum = Math.max(maxSum,tempSum)
    if(tempSum<0) tempSum = 0
  }
  return maxSum
}

console.log(getMaxSubSum([1,2,3])) //answer 6 

function secondlargestNumber (arr) {
  let firstLargest = arr[0]
  let secondLargest
  for(let i=1 ;i<arr.length ;i++){
    if(arr[i]<firstLargest){
      secondLargest = arr[i]
    }else {
       secondLargest = firstLargest
      firstLargest = arr[i]
    }
  }
  return secondLargest
}

console.log(secondlargestNumber([1,2,3,4,5]))

// shift and unshift 

const s = "abcde";
const goal = "bcdea";

const shiftandmatch = (original, target) => {
    let originalstring = original.split("");
    for (let i = 0; i < originalstring.length; i++) {
        if (originalstring.join("") === target) return true;
        originalstring.unshift(originalstring.pop());
    }
    return false;
};

// First test case
console.log(shiftandmatch(s, goal)); // true

// Second test case
console.log(shiftandmatch("abcde", "abced")); // false

// Additional test cases
console.log(shiftandmatch("abcde", "cdeab")); // true
console.log(shiftandmatch("abcde", "eabcd")); // true
console.log(shiftandmatch("abcde", "abcde")); // true

// find the length of the longest consecutive ones in array 
// HID Question
function longestConsecutiveOnes(arr) {
    let maxLength = 0;
    let currentLength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentLength++; // Increase length of current sequence
        } else {
            // Reset the current length when a 0 is encountered
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            currentLength = 0; // Reset current length
        }
    }

    // Check once more in case the longest sequence ends at the end of the array
    if (currentLength > maxLength) {
        maxLength = currentLength;
    }

    return maxLength;
}

// Example usage:
const arr = [1, 1, 1, 1, 0, 0, 1, 1, 1];
console.log(longestConsecutiveOnes(arr)); // Output: 4
 


// A Javascript program to find floor(sqrt(x)
 
// Returns floor of square root of x
function floorSqrt(x)
{
     
    // Base cases
    if (x == 0 || x == 1)
        return x;
 
    // Starting from 1, try all
    // numbers until i*i is
    // greater than or equal to x.
    let i = 1;
    let result = 1;
     
    while (result <= x)
    {
        i++;
        result = i * i;
    }
    return i - 1;
}

// Combinations Problem using recursion 

function generateCombinations(arrays) {
  if (arrays.length === 0) return [[]];

  // Get the first array and the rest of the arrays
  const [firstArray, ...restArrays] = arrays;

  // Recursively generate combinations for the rest of the arrays
  const combinations = generateCombinations(restArrays);

  // Prepare the result array
  const result = [];

  // Combine each element of the first array with all combinations of the rest
  for (const item of firstArray) {
    for (const combination of combinations) {
      result.push([item, ...combination]);
    }
  }

  return result;
}

// Example usage
const input = [[1, 2], [3, 4], [5]];
const result = generateCombinations(input);
console.log(result);

