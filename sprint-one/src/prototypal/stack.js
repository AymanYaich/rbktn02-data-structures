var Stack = function() {
  var newStack = Object.create(stackMethods)
  newStack._size=0;
  newStack.storage={};
  return newStack

};

var stackMethods = {};

stackMethods.push= function ( value){
  this.storage[this._size]=value;
  this._size++

};

stackMethods.pop = function (){
  if( this._size<=0){
    return this._size=0;
  }
  this._size--
  var result=this.storage[this._size]
  delete (this.storage[this._size])
  return result

};

stackMethods.size = function (){
  return this._size;
};



