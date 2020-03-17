var Stack = function() {
  var someInstance = {};
  var storage = {};
  someInstance._size=0;
  someInstance.storage=storage;


  // Use an object with numeric keys to store values


  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance._size]=value;
    someInstance._size++
  };

  someInstance.pop = function() {
    if ( someInstance._size <= 0){
      return someInstance._size=0
    }

    someInstance._size --
    var value = someInstance.storage[someInstance._size]
    delete ( someInstance.storage[someInstance._size])
    return value;


  };

  someInstance.size = function() {
    return someInstance._size;
  };

  return someInstance;
};
