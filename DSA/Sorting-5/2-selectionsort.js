//same as bubble sort but swapping is done on outer loop this way it reduces swapping steps on the inner loop

function selectionSort(arr){
for(var i=0;i<arr.length;i++){
    var lowest=i;
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[lowest]){
            lowest=j;
        }
    }
    //then swap
    if(i!==lowest){
        var temp=arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp
    }
}
return arr;
}

selectionSort([34,22,10,19,17])
