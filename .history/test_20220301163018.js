const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'world';

const allSymbol = Object.getOwnPropertySymbols()