//alert("welcome to my page")

// async function getData(){
//    return new Promise((resolve,reject)=>{
//    setTimeout(() => {
//      resolve(5000)
//    }, 4000);
//    })
// }

async function getData(){
    let x= await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await x.text()
    return data   
}

async function main(){
console.log('Loading  Data ');

console.log('almost there...');

let Data = await getData()
console.log(Data);

console.log('Your task done');
}

main()