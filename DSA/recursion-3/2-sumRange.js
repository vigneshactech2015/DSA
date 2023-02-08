//Find sumRange of number 
//Example 3 answer will be 6 (1+2+3)

function sumRange(num){
    if(num===1)return 1
    return num+sumRange(num-1)
}

sumRange(3)


//Factorial of number recursive method

function factorial(num){
if(num===1){
    return 1
}
return num*factorial(num-1)
}

factorial(3)

//factorial of number iterative method

function factoriali(num){
    let total=1;
    for(let i=num;i>1;i--){
     total=total*i
    }
}

console.log(factoriali(5))

