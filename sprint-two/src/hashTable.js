var getIndexBelowMaxForKey = function (key,size){
  var hash=0;
  for ( var j =0 ; j<key.length ; j++){
    hash = key.charCodeAt(j)
  }
  return hash%size
}

var HashTable = function() {
  this._limit = 8;
  this._storage = new Array (this._limit);
  for ( var i = 0; i<this._storage.length; i++){
    this._storage[i]= new Map ()
  }

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index].set(k,v)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index].get(key)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempValue =this.retrieve(k);
  delete (this._storage[index].delete(key))
  return tempValue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


