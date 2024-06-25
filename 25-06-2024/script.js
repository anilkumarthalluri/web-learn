let a = prompt("Enter first number ")
let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    
    try {
        let x = 1
        console.log("The sum is ",sum*x);
        return true
    } catch (error) {
        console.log('some variable is not defined');
        return false
    }
    finally{
        console.log('program is done');
        
    }
}

let c = main()
console.log(c);
