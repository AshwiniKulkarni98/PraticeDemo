//what is prototype 
//Is the one object which is inturn attached to the object that we will be creating giving us the access to the special methods
let arr =["Ashwini","Kulkarni","Shreya","Desai"]
console.log(arr.__proto__) //Get the methods and object 

let arr1 =["Mummy","Pappa"]
//protoype Chain
//Each thing will have the internal link to another Object , so is iterated till till the object reaches Null , Is the prototype Chain
console.log(arr.__proto__.__proto__.__proto__)
//Prototypal inheritance is inherting the properties of one object into another.
let a = {
     First :"Ashwini",
     Last :"Kulkarni"
}
let b ={
    First:"Shreya",
}
b.__proto__ = a

console.log(b.Last);

console.log(arr.__proto__);