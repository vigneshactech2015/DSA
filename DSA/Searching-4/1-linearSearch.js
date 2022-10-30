//If element is present in the array return the index of that element
//Else return -1

function linearSearch(arr,val){

    for(let i=0;i<=arr.length;i++){
      if(arr[i]===val){
        return i
      }
    }
     return -1
  }
  
  linearSearch([1,2,3],1)