let size = Symbol('size');

class MyCollection {
  constructor(){
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    
  }
}