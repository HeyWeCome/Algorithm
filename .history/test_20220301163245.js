const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'world';

// const allSymbol = Object.getOwnPropertySymbols(obj);
// console.log(allSymbol);

for(let i in obj){
  let temp = Object.getOwnPropertySymbols(i);
  console.log(first)
}