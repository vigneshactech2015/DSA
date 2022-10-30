//Capitalize first

function capitalizeFirst(arr){  
  return arr.map((a)=>a.charAt(0).toUpperCase()+a.slice(1));
  }
  
  capitalizeFirst(['car','taco',
                   'banana']);

//Taking only first and lastname first letter

var fullName="vignesh vijayakumar";
var separatedname=fullName.split(' ');
console.log(separatedname)
var takingfirstletter=separatedname[0].charAt(0).toUpperCase()+separatedname[1].charAt(0).toUpperCase();
console.log(takingfirstletter);


 //Capitalize Words
 
 function capitalizeWords (arr) {
    return arr.map((a)=>a.toUpperCase());
  }
  let words=['i', 'am', 'learning', 'recursion'];
  capitalizeWords(words);


//Nested sum
//Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects. 


function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10



  //stringify numbers in object


  function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }

  let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)