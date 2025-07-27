class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublylinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){

        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    searchbyValue(value){
        if(!this.head){
            return console.log("No Data present")
        }
        let current = this.head
        while(current){
            if(current.data == value){
                return console.log('Data found')
            }
            current = current.next
        }
        return console.log("Not Found");
        
    }
        printForward() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.data);
      current = current.next;
    }

    console.log("Forward:", values.join(" ⇄ "));
  }
  getAt(n){
    if(!this.head){
        console.log("No data found");
    }
    let count = 0;
    let current = this.head
    while(current.next && count < n){
            current = current.next;
            count++;        
    }
    console.log(`At position ${n} value is ${current.data}`);
    return current
    
  }


    deleteAt(n){
        if (!this.head) {
            console.log("Node is Empty");
        }
        let current = this.getAt(n);
        current.next.prev = current.prev;
        current.prev.next = current.next;
    }
}
const dll = new DoublylinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.append(50);
dll.append(60);
dll.append(70);
dll.append(80);
dll.printForward();
dll.searchbyValue(10)
dll.getAt(2)
dll.deleteAt(3);
dll.printForward();