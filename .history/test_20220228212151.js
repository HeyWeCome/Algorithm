var a = "abc";
var b = Object(a); 
c = b.valueOf();
console.log(b);
console.log(b.valueOf());
// Object(a); // String{"abc"}