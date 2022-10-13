/*Write a function called same,which accepts two arrays.The function
should return true if every value in the array has its corresponding 
values squared in the second array.The frequency of values must be the
same
same([1,2,3],[4,1,9]) true
same([1,2,3],[4,1] false
*/

function same(arr1,arr2){

if(arr1.length!==arr2.length){
    return false
}

let frequencyCounter1={}
let frequencyCounter2={}

for(let val of arr1){
    frequencyCounter1[val]=(frequencyCounter1[val]||0)+1
}

for(let val of arr2){
    frequencyCounter2[val]=(frequencyCounter2[val]||0)+1
}


//look at this
for(let key in frequencyCounter1){
    if(!(key**2 in frequencyCounter2)){
        return false
    }
    if(frequencyCounter2[key**2]!==frequencyCounter1[key]){
        return false
    }
}
return true
}

same([1,2,3],[4,1,9])


//solving anagrams

//validAnagram('aaz','zza') false
//validAnagram('anagram','nagaram') true

function validAnagram(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
    let frequencyCounter1={}
    let frequencyCounter2={}
    for(let val of arr1){
        frequencyCounter1[val]=(frequencyCounter1[val]||0)+1
    }
        for(let val of arr2){
            frequencyCounter2[val]=(frequencyCounter2[val]||0)+1
        }
            for(let key in frequencyCounter1){
                if(!(key in frequencyCounter2)){
                    return false
            }
            if(frequencyCounter2[key]!==frequencyCounter1[key]){
               return false 
            }
        }
        return true
    }
   
  
  validAnagram('anagram','nagaram')

//Are there duplicates?

//Hint: run only one frequencyCounter

function areThereDuplicates(arguments) {
    let frequencyCounter1 = {}
    for(let val of arguments){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
      if(frequencyCounter1[key] > 1) return true
    }
    return false;
  }
  areThereDuplicates([1,1,2])

  //one line solution

  function areThereDuplicatesOneline(arguments) {
    return new Set(arguments).size !== arguments.length;
  }

  areThereDuplicatesOneline([1,1,2])
