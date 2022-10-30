//LL is not index based hence easy to insert,delete
//access may not be simple when compared to array
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
     var newNode=new Node(val);
     //if created for first time 
     if(!this.head){
        //both head and tail same
        this.head=newNode;
        this.tail=this.head;
     }else{
        //pointing tail to newly created node
        this.tail.next=newNode;
        this.tail=newNode;
     }
     this.length++;
     return this;
    }
    pop(){
        if(!this.head)return undefined;
        var current=this.head;
        var newTail=current;
//if next element is present then iterate through the loop
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }
    shift(){
        if(!this.head)return undefined;
        var currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0 || index>=this.length)return null;
        var counter=0;
        var current=this.head;
        while(counter!==index){
            current=current.next;
            counter++;
        }
        return current;
    }
    //set means changing the existing value
    set(index,val){
        var foundNode=this.get(index);
        if(foundNode){
            foundNode.val=val;
            return true;
        }
        return false;
    }
    insert(index,val){
        //note:not equal to
        if(index<0||index>this.length)return false;
        if(index===this.length)return !!this.push(val);
        if(index===0)return !!this.unshift(val);
        var newNode=new Node(val);
        var prev=this.get(index-1);
        var temp=prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index<0||index>=this.length)return undefined;
        if(index===0)return this.shift();
        if(index===this.length-1)return this.pop();
        var previousNode=this.get(index-1);
        var removed=previousNode.next;
        previousNode.next=removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        //swapping head and tail
        var node=this.head;
        this.head=this.tail;
        this.tail=node;
        var next;
        var prev=null;
        for(var i=0;i<this.length;i++){
            next=node.next;
            node.next=prev;
            prev=node;
            node=next;
        }
        return this;
    }
}

var list=new SinglyLinkedList()
list.push("Hello")
list.push("GOODBYE")
list.push("Vicky")
list.get(0);
list.set(2,"Vignesh")