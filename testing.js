
let name = 'username'

function sayHello() {
  console.log('hello ' + name) 
}

sayHello()
// => 'hello username'

// Closures help access external variables 

function outsideLayer(outsideVariable){
  return function innerLayer(insideVariable){
    console.log(outsideVariable)
    console.log(insideVariable)
  }
}

const accessOutside = outsideLayer('This gets passed to outside')

// we create a variable that refers to outsideLayer, and then passes an agrument to it

accessOutside('This gets passed to the inside')
// we then call the function, that passes an argument to the inner funtion located in outsideLayer. 

// => This gets passed to outside
// => This gets passed to the inside 

// CLOSURE BABY!
function testing() {
  return ' hi im a test'
}
console.log(testing())

let pinkyPromise = new Promise((resolve, reject) => {
  let returnNumber = 5 + 5
  if (returnNumber === 10) {
    resolve('yes this was the correct number')
  } else {
    reject('man we made a mistake somewhere')
  }
})

pinkyPromise.then(goodMessage => {
  console.log(goodMessage)
}).catch(badMessage => {
  console.log(badMessage)
})

let pinkyPromise1 = new Promise((resolve)=> {
  resolve('This has to be returned')
})
let pinkyPromise2 = new Promise((resolve)=> {
  resolve('This also has to be returned')
})
let pinkyPromise3 = new Promise((resolve)=> {
  setTimeout(() => {
    resolve('finally this also needs to be returned')
  }, 3000);
  
})

Promise.all([pinkyPromise1, pinkyPromise2, pinkyPromise3]).then(allMessages =>{
  console.log(allMessages)
})

function kangaroo(x1, v1, x2, v2) { 
  let flag= true; 
  let result= "NO"; 
  let y = 0;
   while(flag){ 
     y++; 
     result = ( (x1+v1) ===(x2+v2) ? "YES" : "NO"); if(result === "YES"){ 
       flag = false; } 
        x1 = x1+v1;
        x2 = x2+v2; 
        if(y> 1000000){ 
          return result; 
        } 
      } 
        return result; }