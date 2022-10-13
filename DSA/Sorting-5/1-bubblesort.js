//Sorting algorithm where largest value bubbles to the last

//naive bubble sort

function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            //SWAP
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
return arr
}

bubbleSort([2,3,1,10,4,5])

//better approarch


function bubbleSort(arr){
   var noSwaps;
    for(let i=arr.length;i>0;i--){
        noSwaps=true;
        for(let j=0;j<i-1;j++){
            //SWAP
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwaps=false;
            }
        }
        if(noSwaps) break;
    }
return arr
}

bubbleSort([2,3,1,10,4,5])