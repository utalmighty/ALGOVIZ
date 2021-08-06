// Creates Nodes.
function createnodes(matrix, n, start = 1) { //please provide a way to move start point decided by user.
    //"""Return dictionary of nodes created and graph object"""
    console.log("Cresting Maze, Please Wait.");
    dicta = {};
    graph = new Graph(); // (0, 0) is always start and n,n is end
    for (var i = 1; i <= (n * n); i++) {
         if (i == start) { // START
              dicta[i] = graph.markstart(i);
         }
         else if (i == n * n) { // END
              dicta[i] = graph.markend(i);
         }
         else if (matrix[xycord(i, n)[0]][xycord(i, n)[1]] == 1) {
              dicta[i] = graph.insert(i);
              directions = 'UDRL';
              for (var a = 0; a < directions.length; a++) {
                   temp = adjacents(i, directions[a], n);
                   if (temp != null) {
                        if (dicta[temp]) {
                             relate(x, dicta[i], dicta[temp]);
                        }
                   }
              }
         }
    }
    console.log("Maze Created.");
    return [dicta, graph];
}
// BY UTKARSH JAISWAL
