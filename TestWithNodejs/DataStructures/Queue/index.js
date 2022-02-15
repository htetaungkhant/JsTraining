// first in first out (FIFO)
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        if (this.items.length === 0) return null;
        return this.items[0];
    }

    getSize() {
        return this.items.length;
    }

    isEmpty() {
        return this.getSize === 0;
    }
}

const cars = new Queue();
cars.enqueue('Honda');
cars.enqueue('Mazda');
cars.enqueue('Toyota');
console.log(cars);
cars.dequeue();
console.log(cars);
console.log(cars.peek());
