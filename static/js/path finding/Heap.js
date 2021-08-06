       
class Minheap{
// ONLY TO BE USED FOR A STAR NODES. arranged on basis of combined heuristic.
    constructor() {
        //'''Min HEAP Constructor.'''
        this.list = [];
        this.length = 0;
    }

    parent(ind) {
        //'''Returns parent of current index.'''
        if (ind == 0){
            return 0;
        }
        return Math.ceil(ind/2)-1;
    }

    rightchild(ind){
        //'''Returns right child index if any.'''
        var ans = (ind*2)+2;
        if (ans < this.length){
            return ans 
        }
        return null
    }

    leftchild(ind) {
        //'''returns left child index if any.'''
        var ans = (ind*2)+1;
        if (ans < this.length){
            return ans
        }
        return null
    }

    swap(a, b) {
        //'''Method to swap elements in heap.'''
        var temp = this.list[a];
        this.list[a] = this.list[b];
        this.list[b] = temp;
    }

    insert(a_obj) {
        //'''Method to insert in MIN HEAP.'''
        this.list[this.length] = a_obj
        this.length += 1
        this.heapifyup(this.length-1)
    }
        
    pop() {
        //'''Pops Minimum element from heap.'''
        if (this.length > 0) {
            this.swap(0, this.length-1)
            var ans = this.list.pop();
            this.length -= 1;
            this.heapifydown(0)
            return ans;
        }
        else {
            return null;
        }
    }
        

    ispresent(name) {
        // return the index of element if present in heap
        var index = null
        for (i = 0; i <this.length; i++){
            if (this.list[i].name == name){
                index = i;
                break;
            }
        }
        return index
    }


    heapifyup(i) {        
        //'''HEAP insert helping function. '''
        if (this.list[this.parent(i)].comb_heuristic > this.list[i].comb_heuristic) { // REMOVE .comb_heuristic for normal heap
            this.swap(this.parent(i), i);
            return this.heapifyup(this.parent(i))
        }
        else {
            return null
        }
    }

    heapifydown(i) {
        //'''heap pop healping function. '''
        var small = this.leftchild(i);
        if (small != null) {
            if ((this.rightchild(i) != null) &&  (this.list[small].comb_heuristic > this.list[this.rightchild(i)].comb_heuristic)) { // REMOVE .comb_heuristic for normal heap
                small = this.rightchild(i);
            }
            if (this.list[small].comb_heuristic < this.list[i].comb_heuristic) { // REMOVE .comb_heuristic for normal heap
                this.swap(small, i);
                this.heapifydown(small);
            }
        }
        else {
            return null
        }
    }

} // BY UTKARSH JAISWAL