let size = Symbol('size');

class MyCollection {
  constructor(){
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeof(instance) {
    return instance[size];
  }
}

let x = new MyCollection();
console.log(MyCollection.sizeof(x));

