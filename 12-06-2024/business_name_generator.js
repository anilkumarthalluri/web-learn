//generating random three word by combining list of adjecives and another word

/*
Name :
  Anil
  ram
  prasad
role :
  student
  Developer
  youtuber
salary :
  0
  12L
  50L
*/
let ran = Math.random()
let first, second, third;
//generating first
if(ran<0.33){
    first = "Anil"
}
else if(ran<0.66 && ran>=0.33){
    first = "ram"
}
else{
    first = "prasad"
}
//generating second 
ran = Math.random()
if(ran<0.33){
    second = "student"
}
else if(ran<0.66 && ran>=0.33){
    second = "Developer"
}
else{
    third = "youtuber"
}
//generating third
ran = Math.random()
if(ran<0.33){
    third = "0"
}
else if(ran<0.66 && ran>=0.33){
    third = "12L"
}
else{
    third = "50L"
}

console.log(`${first} ${second} ${third}`)