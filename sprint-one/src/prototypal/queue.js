var Queue = function() {
  var newQueue= Object.create(queueMethods)
  newQueue._size=0;
  newQueue.storage={}
  newQueue.head=0;
  newQueue.tail=0;
  return newQueue
};

var queueMethods = {};

queueMethods.enqueue= function (value){
     this.storage[this.head]= value;
     this.head++
     this._size++
};
queueMethods.dequeue = function (){
  if ( this._size<=0){
    return this._size=0
  }
  var result = this.storage[this.tail]
  delete (this.storage[this.tail])
  this.tail++
  this._size--
  return result
};

queueMethods.size = function (){
  return this._size
}


