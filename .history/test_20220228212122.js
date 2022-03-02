var a = "abc";
var b = Object(a); 
c = b.valueOf() 
console.log(b);
console.log(b.valueof());
// Object(a); // String{"abc"}