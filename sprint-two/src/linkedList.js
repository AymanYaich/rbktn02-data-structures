var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node (value);

    if ( !this.head && !this.tail){
      this.head=node;
      this.tail=node
    }
    else {
      this.tail.next=node;
      this.tail=node;
    }
  }

  list.removeHead = function() {
    var head = this.head;

    this.head=this.head.next;



    return head.value

  };

  list.contains = function(target) {
    var result = this.head
    while(result){
      if (result.value===target){
        return true
      } else {
        result=result.next
      }
    }
    return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
