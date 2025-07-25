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

    addAtStart(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else
        {
            newNode.next = this.head
            this.head = newNode
        }
    }

    deleteByValue(value){
        if(!this.head) return

        if(this.head.data == value){
            this.head = this.head.next
            return
        }
        else{
            let current = this.head;
            
            while(current.next && current.next.data !== value){
                current = current.next
            }

            if(current.next){
                current.next = current.next.next
            }
        }
    }

    searchByValue(value){
        if(!this.head) return null

        let current = this.head;
        while(current){
            if(current.data == value) console.log("Value present :",current);
            ;
            current = current.next;
        }
        console.log("Value not Found");
        
    }

    reverse(){
        let current = this.head;
        let prev = null

        while(current){
            let nextNode = current.next;
            current.next = prev;
            prev = current
            current = nextNode
        }
        this.head = prev
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
list.addAtStart(5)
list.print()
list.deleteByValue(10)
list.print()
list.searchByValue(5)
list.print()
list.reverse()
list.print()