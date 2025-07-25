class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Using SinglyLinkedList class we are allocating a place in the node list or linking the one node with another.
class SinglyLinkedList{
    constructor(){
        this.head = null; // Creating head property 
    }

    append(data){
        const newNode = new Node(data) //create a node object

        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head

            while(current.next){
                current = current.next;
            }
            current.next = newNode
        }
    }
    print(){
        let current = this.head;
        const values = []

        while (current) {
            values.push(current.data)
            current = current.next;
        }
        console.log(values.join(" -> "));
        
    }
}

const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.print()