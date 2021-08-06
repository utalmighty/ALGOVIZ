// BASIC NODE CLASS.
class Node {
    constructor(nam) {
         this.name = nam;
         this.up = null;
         this.down = null;
         this.left = null;
         this.right = null;
         this.up_weight = null;
         this.down_weight = null;
         this.left_weight = null;
         this.right_weight = null;
    }
}
// BY UTKARSH JAISWAL
class Graph {
    constructor() {
         this.start = null;
         this.end = null;
    }
    markstart(n) {
         var nd = new Node(n);
         this.start = nd;
         return nd;
    }
    markend(n) {
         var nd = new Node(n);
         this.end = nd;
         return nd;
    }
    insert(no, weight = 1) {
         var n = new Node(no);
         return n;
    }
    reached(n) {
         if (this.end == n)
              return true;
         return false;
    }
}
// BY UTKARSH JAISWAL


class Astar_node {
     //Designed for Astar nodes.
     constructor(name, via, dist, combined_heuristic){
         this.name = name;
         this.via = via;
         this.dist = dist;
         this.comb_heuristic = combined_heuristic;
     }
 } // BY UTKARSH JASIWAL