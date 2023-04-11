//calculating length of each character in string

function charCount(str){

    var result={}

    for(let i=0;i<=str.length;i++){
        var char=str[i].toLowerCase();

        if(/[a-z0-9]/.test(char)){
        if(result[char]>0){
            result[char]++
        }else{
            result[char]=1
        }
    }
    }
    return result
}
charCount('something')

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
  let result=[]
  let flag = false
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]>arr[i]){
        result.push(arr[j])
        flag = true
        break
      }
    }
   if(!flag){
     result.push(-1)
   }
  }
  result.push(-1)
  return result
}

console.log(nearestLargesttoRight([1,2,3,4,5]))

