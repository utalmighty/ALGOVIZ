// Queue class for FIFO.

class Queue{
    constructor() {
        this.queue = []
    }
    insert(n) {
        this.queue.push(n)
    }
    pop() {
        if (this.queue.length > 0 ){
            return this.queue.shift()
        }
        return null
    }
    isEmpty(){
        if (this.queue.length > 0 ){
            return false
        }
        return true
    }
}//BY UTKARSH JAISWAL