class Queue {

constructor (){
this.storage={}
this._size=0;
this.head=0;
this.tail=0;
};
 enqueue(value){
   this.storage[this.head]=value;
   this.head++
   this._size++

 };
 dequeue (){
   if ( this._size<=0){
     return this._size=0
   }
   var result = this.storage[this.tail]
   delete(this.storage[this.tail])
   this.tail++
   this._size--
   return result


 };
 size(){
   return this._size

 };




};