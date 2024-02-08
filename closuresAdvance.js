const x =100
function closures(){
    var x = 10;
    x=100;
//some cool developers will just return the function which s same as return close which we have commented now
 return function close(){
    console.log(x) // here it will return 100 , which is its immediate reference
}
// return close
}

var z = closures(x)
console.log(z);
/////....even i we have 1000 lines of codes here and after this we can still call the z() 
//it will still remember the "refernce"(not value) to the x and then return the value of the x , though all the call stack is gone

z()