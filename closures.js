//A function along with its lexical environment

const x =100
function closures(){
    var x = 10;
    function close(x){
    console.log(x)
}
return close(x)
}

closures()