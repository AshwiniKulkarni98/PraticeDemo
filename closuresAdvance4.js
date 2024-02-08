let a =12;
function x(hello)
{
    let a =1;
   function y(){
        console.log(a,hello);
    }
   return y
}
x("hello")()