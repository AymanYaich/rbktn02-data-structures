var Queue = function() {

  this.storage={}
  this._size=0;
  this.head=0;
  this.tail=0;
};

Queue.prototype.enqueue= function ( value){
  this.storage[this.head]=value;
  this.head++
  this._size++
};

Queue.prototype.dequeue= function (){
  if ( this._size<=0){
    return this._size=0
  }
  var result= this.storage[this.tail];
  delete( this.storage[this.tail])
  this.tail++
  this._size--
  return result
};

Queue.prototype.size= function (){
  return this._size
};

