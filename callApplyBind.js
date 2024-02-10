let obj1 ={
    "First_Name" :"Ashwini",
    "last_Name":"Kulkarni",
     "print": function a(home,state){
 console.log(this.First_Name ,this.last_Name,home,state);
      }
}
let obj2 ={
    "First_Name" :"Shreya",
    "last_Name":"Kulkarni",
}
obj1.print.call(obj2,"Raichur","Karnataka") //call method , even mutilple arguments also can be passed

obj1.print.apply(obj2,["Raichur","Karnataka"])  //same as call , but passing as arr

//here in bind we can create the copy and use it almost anywhere in the whole code
const abc=obj1.print.bind(obj2,"Raichur","Karnataka") 
console.log(abc);
abc()
// obj1.print.apply(obj2)