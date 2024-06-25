alert("welcome to my page");

console.log("Hey, hi");
//basic for loop
console.log("for loop ");
for(let i =1 ; i<10 ; i++){
    console.log(i);
}

let obj = {
    name : "Anil",
    role : "Devloper",
    company : "google"
}
//for in loop
console.log("for in loop");
for(const key in obj){
    const element = obj[key];
    console.log(key+":"+element);
}
//for of loop
console.log("for of loop");
for(const c of "Anil"){
    console.log(c);
}
//while loop
console.log("while loop");
let i = 1;
while(i<5){
    console.log(i);
    i++;
}
//do while loop
console.log("do while loop");
let k = 1;
do{
    console.log(k);
    k++;
}while(k<10);

function hi(a, b){
    console.log("in hi function",a+b)
}

hi(10, 20)