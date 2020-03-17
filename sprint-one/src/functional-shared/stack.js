var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage={};
  var newStack={}
  newStack._size=0;
  newStack.storage=storage;
  extend(newStack,stackMethods)
  return newStack;
};
var extend = function ( to , from){
  for ( var key in from){
    to[key]=from[key]
  }
}
 stackMethods = {};

stackMethods.push= function ( value ){
  this.storage[this._size]=value;
  this._size++
};

stackMethods.pop = function (){
  if (this._size<=0){
    this._size++
  }
  this._size--
  var result= this.storage[this._size]
  delete ( this.storage[this._size] )
  return result;
};
stackMethods.size= function (){
  return this._size
};



