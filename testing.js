
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
