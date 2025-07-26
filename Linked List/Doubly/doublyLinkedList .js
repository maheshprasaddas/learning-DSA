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
        printForward() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.data);
      current = current.next;
    }

    console.log("Forward:", values.join(" ⇄ "));
  }
}

const dll = new DoublylinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward();