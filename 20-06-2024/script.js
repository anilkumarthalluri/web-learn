// console.log("Anil is a Hacker")   
// console.log("tyson is a Hecker")

// setTimeout(() => {
//         console.log("I am inside setTimeout 1")
// }, 0);
// setTimeout(() => {
//         console.log("I am inside setTimeout 2")
// }, 0);

// console.log("The End")



let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject("you are not supported")
    }
    else{
        console.log("yes I am done")
        resolve("tyson")
    }
   
})

prom1.then((a)=>{
    console.log(a); 
}).catch((err)=>{
    console.log(err);
    
})
