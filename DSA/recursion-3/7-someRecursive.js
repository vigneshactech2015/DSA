/*
Write a recursive function called someRecursive which accepts
 an array and a callback. The function returns true
 if a single value in the array returns true when passed 
 to the callback. Otherwise it returns false.
*/
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

someRecursive([1,2,3,4], isOdd)

function isOdd(p){
    if(p%2!==0)return true;
    if(p%2===0) return false;
}



//flatten method

function flatten(par){
    let a1=par
    let a2=a1.flat()
    console.log(a2)
  }
  let arr=[1,2,3,[4,5]]
  flatten(arr);
