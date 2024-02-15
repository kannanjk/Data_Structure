class Node {
    constructor(values) {
        this.value = values
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enQueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    deQueue(){
        if (!this.first) return null
        var temp = this.first
        if (this.first===this.last) this.last=null
        this.first= this.first.next
        this.size--
        return temp.value
    }
}

const q = new Queue()

q.enQueue('1')
q.enQueue('3')
q.enQueue('5')
console.log(q.deQueue());
console.log(q.deQueue());
