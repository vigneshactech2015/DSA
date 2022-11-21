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
