//Binary Search works only on a sorted array

function binarySearch(arr,elem){
let start=0;
let end=arr.length-1;
let middle=Math.floor((start+end)/2);
while(arr[middle]!==elem&&start<=end){
    if(arr[middle]>elem) end=middle-1;
    else start=middle+1;
    middle=Math.floor((start+end)/2)
}
return arr[middle]===elem?middle:-1;
}

binarySearch([1,2,3,4,5,6,7],5)