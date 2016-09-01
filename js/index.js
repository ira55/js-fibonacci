var num =  Number(prompt('Enter number'));

// function fib (n){
//     var a = 1;
//     var b = 1;
//      for (var i = 3; i<=n; i++){
//      var c = a + b;
//      a = b;
//      b = c;
//     }
//      return b;
// }
//     alert(fib(num)); 
    
function fib(n) {
    if (n<=1){
        return n
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

alert(fib(num));