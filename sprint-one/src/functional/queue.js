var Queue = function() {
  var storage = {};
  var someInstance = {};

  // Use an object with numeric keys to store values

  someInstance._size=0;
  someInstance.head=0;
  someInstance.tail=0;
  someInstance.storage=storage;



  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.head]=value;
    someInstance._size++
    someInstance.head++
  };

  someInstance.dequeue = function() {
    if ( someInstance._size<= 0){
         return someInstance._size = 0;
    }

    var result = someInstance.storage[someInstance.tail]
    delete( someInstance.storage[someInstance.tail] )
    someInstance.tail++
    someInstance._size--

    return result
  };

  someInstance.size = function() {
    return someInstance._size
  };

  return someInstance;
};
