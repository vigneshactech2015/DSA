function memoize = (fn) =>{
    const cache = {}
    
    return (...args)=>{
      const argsToString = JSON.stringify(args)
      if(argsToString in cache){
       return cache[argsToString]
      }else{
        const result = fn.apply(this,args)
        cache[argsToString] = result
        return result
      }
    }

}


const factorial = memoize((x)=>{
  if(x===0) return 1
  else return x * factorial(x-1)

})
