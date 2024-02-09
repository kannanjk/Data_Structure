class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop(){
        if(!this.first) return null
        if(this.first === this.last){
            this.last = null
        }
        var temp = this.first
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const stck = new Stack()

stck.push("1")
stck.push("2")
// stck.push("3")

console.log(stck.pop()) 
// stck.push("4")
console.log(stck.first) 

// console.log(stck.last) 
// console.log(stck.size) 