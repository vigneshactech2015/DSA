//method 1
function isPalindrome(str){
    
    var reg=/[\W_]/g;
    //removing unwanted spaces
    var LwrStr=str.toLowerCase().replace(reg,'');
    var cvt=LwrStr.split('').reverse().join('');
    return cvt===LwrStr;
  }

  isPalindrome('tacocat')

  //method 2

  function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];//will return either true or false
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
  }

  isPalindrome('tacocat')