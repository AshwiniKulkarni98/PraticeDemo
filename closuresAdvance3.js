//expection is to print all 1 , 2,3,4,5 in the respective intervals of time 
for(let i=1;i<=5;i++)
// for(var i=1;i<=5;i++)
{
    setTimeout(function a(){ 
        console.log(i); //this wont work it prints 6 with repective interval because of var , its global scope , the variables will refer to one global scope , so here they will refer there , so use let its a block scoped
    },i*1000)
}

console.log("Namaste Javascript");

