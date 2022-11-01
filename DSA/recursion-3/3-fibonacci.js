/*
Write a recursive function called fib which accepts a number and 
returns the nth number in the Fibonacci sequence.
 Recall that the Fibonacci sequence is the sequence of 
 whole numbers 1, 1, 2, 3, 5, 8, ...
 which starts with 1 and 1, and where every 
number thereafter is equal to the sum of the previous two numbers.

*/

function fib(num){
if(num<=2){
    return 1
}
return fib(num-1)+fib(num-2);
}

fib(3)

//with memoized version

function fib(num,memo=[]){
 if(memo[num]!==undefined)return memo[num];
if(num<=2){
    return 1
}
var res=fib(num-1,memo)+fib(num-2,memo);
 memo[num]=res;
 return res;
}

fib(3)

//using tabulation

function fibtabulation(n){
 if(n<=2)return 1;
 var fibNums=[0,1,1];
 for(var i=3;i<=n;i++){
  fibNums[i]=fibNums[i-1]+fibNums[i-2];
 }
 return fibNums[n];
}
