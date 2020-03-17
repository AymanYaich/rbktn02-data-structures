var Queue = function() {
  var storage={}
  var newQueue ={}
  newQueue.storage=storage;
  newQueue._size=0;
  newQueue.head=0;
  newQueue.tail=0;
  extend(newQueue,queueMethods)
  return newQueue;

};

var extend=function ( to , from){
  for ( var key in from){
    to[key]=from[key]
  }
};

queueMethods = {};

queueMethods.enqueue = function (value){
  this.storage[this.head]=value;
  this.head++
  this._size++

};

queueMethods.dequeue = function (){
  if ( this._size<=0){
    return this._size=0;
  }
  result= this.storage[this.tail];
  delete(this.storage[this.tail])
  this.tail ++
  this._size--
  return result
}

queueMethods.size = function (){
  return this._size
}




