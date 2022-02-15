class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = { value: value, next: this.head };
        // newNode.next = this.head; will require if next of newNode was initialized null
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);
        if (existingNode) {
            const newNode = { value: value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }

    find(value) {
        if (!this.head) return null;

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }
        return null;
    }

    delete(value) {
        if (!this.head) return;

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    toArray() {
        const elements = [];

        let currentNode = this.head;

        while (currentNode) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return elements;
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append('test');
linkedList.append('gg');
linkedList.append('gg');
linkedList.prepend('prepend');
console.log(linkedList.toArray());

linkedList.delete('gg');
linkedList.append('good');
console.log(linkedList.toArray());

console.log(linkedList.find('gg'));
console.log(linkedList.find('good'));

linkedList.insertAfter('insertAfter1', 'test');
linkedList.insertAfter('insertAfter2', 'good');
console.log(linkedList.toArray());
