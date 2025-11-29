// function one(){
//     const username="Neha"
//     function two(){
//         const website="youtube"
        // console.log(username);
        
 // }
    // console.log(website);
//     two();
// }
// one();


//This and Arrow Function

// const user={
//     username:"Neha",
//     myFunction: function(){
        // console.log(`Hi, ${this.username}`);
        // console.log(this);
        
//     }
// }
// user.myFunction();
// user.username="Ram"
// user.myFunction();



// function name(){
//     let myname="Neha"
// console.log(this);
    
// }
// name()

// const function1 = () => {
//     let anothername="Ram"
// console.log(this);
    
// }
// function1()



// const hello = (nam) => `Hello ${nam}`
// console.log(hello("Neha"));


//Immediately Invoked Function Expression(IIFE)
//TO avoid the global scope pollution

(function anyfunction(){
    console.log(`Hi`);
})();  //To use another IIFE we need to use the semicolon, as it doesnot know when to stop the context

//(where the function is written) (to pass the parameters or arguments)
(() => {
    console.log("Hello");
    
})();

((name) => {
    console.log(`HI I am ${name}`);
    
}) ("Neha")
