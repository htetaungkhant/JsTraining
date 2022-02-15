class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        if (!this.tail) {
            this.tail = this.head = new Node(value);
        } else {
            const oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.previous = oldTail;
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            const oldHead = this.head;
            this.head = new Node(value);
            oldHead.previous = this.head;
            this.head.next = oldHead;
        }
    }

    delete(valueToDelete) {
        if (this.head && this.head.value === valueToDelete) {
            this.head = this.head.next;
            this.head.previous = null;
            return;
        }

        let currentNode = this.head;
        let previous = currentNode.previous;
        let next = currentNode.next;

        while (currentNode !== null && currentNode.value !== valueToDelete) {
            previous = currentNode;
            currentNode = currentNode.next;
            if (currentNode !== null) next = currentNode.next;
        }
        previous.next = next;
        if (next !== null) next.previous = previous;
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    print() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const doubleLinkedList = new DoublyLinkedList();
doubleLinkedList.append(1);
doubleLinkedList.append(1);
doubleLinkedList.append('gg');
doubleLinkedList.prepend('prepend');
doubleLinkedList.delete(1);
doubleLinkedList.print();
console.log(doubleLinkedList.search(1));
