class Stack {

  constructor() {
    this._size=0;
    this.storage={}

  }
  push(value){
    this.storage[this._size]=value
    this._size++

  }
  pop(){
    if(this._size<=0){
      return this._size=0
    }
    this._size--
     var result = this.storage[this._size]
     delete (this.storage[this._size])
     return result
  };

  size(){
    return this._size;
  };

};