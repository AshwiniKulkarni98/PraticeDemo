// No Matter where the function and variables are declared , they will be moved to on the top of the scope while execution context
var n = 10;

function hoist(n){
 let multiply = n*n;
 console.log(multiply);
 return multiply;
 }

 hoist(n);
