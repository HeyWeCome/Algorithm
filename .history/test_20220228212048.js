var a = "abc";
var b = Object(a); 
console.log(b);
console.log(b.value);
// Object(a); // String{"abc"}