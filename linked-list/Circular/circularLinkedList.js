class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      // Point head and tail to themselves (circular)
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      newNode.next = this.head;
      this.head.prev = newNode;

      this.tail = newNode;
    }
  }

  print() {
    if (!this.head) return;

    let current = this.head;
    const values = [];

    do {
      values.push(current.data);
      current = current.next;
    } while (current !== this.head);

    console.log("Circular:", values.join(" ⇄ "), "⇄ (back to head)");
  }
}

const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.print();
