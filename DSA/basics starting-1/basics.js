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

function shuffle(nums, n) {
    let res = []
    for(let i = 0; i < n; i++){
        res.push(nums[i], nums[i+n])
    }
    return res
};
console.log(shuffle([2,5,1,3,4,7],3))

//output [2,3,5,4,1,7]
