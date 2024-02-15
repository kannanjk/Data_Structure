class Queue {
    constructor() {
        this.elements = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.elements[this.tail] = element
        this.tail++
    }
    dequeue() {
        const item = this.elements[this.head]
        delete this.elements[this.head]
        this.head++
        return item
    }
    peek() {
        return this.elements[this.head]
    }
    get length() {
        return this.tail - this.head 
    }
    get isEmpty() {
        return this.length === 0
    }
}

let q = new Queue()

for (let i = 1; i <=7; i++) {
   q.enqueue(i)
}

console.log("Peek "+q.peek());
console.log("Length "+q.length)

while (!q.isEmpty) {
    console.log(q.dequeue());
}