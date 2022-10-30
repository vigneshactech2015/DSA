//iterative way

function iterative(num){
for(let i=0;i<=num;i++){
    console.log(i)
}
}
iterative(5)


//Recursive way
function countDown(num){
//always should have a base case
    if(num<=0){
        console.log('All done')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(5)