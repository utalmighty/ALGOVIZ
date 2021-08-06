colors = []
function solveBFS(matrix, n) {
    //""" basic initializaion for DFS"""
 
    p = createnodes(matrix, n)
    dictofnodes= p[0] 
    graph = p[1]
    k = Object.keys(dictofnodes);
    console.log("Number of nodes created: ", k.length)
    visitdict = {}
    keys = intparser(Object.keys(dictofnodes));
    for (i=0; i<keys.length; i++ ) {
        visitdict[keys[i]] = false;
    }
    startTime = new Date();
    if (BFS(graph, visitdict, dictofnodes, n)){
        console.log("Found")
    } 
    else{
        console.log("Not Found")
    }
    colorit(colors);
    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 10000;
    console.log("Time Elapsed> " + timeDiff);
}
// BY UTKARSH JAISWAL



function BFS(graph, visitdict, dicta, n) {
    queue = new Queue();
    queue.insert(graph.start);
    directions = 'LDRU';
    poped = graph.start;// for while

    while ((!(queue.isEmpty())) && (!(graph.reached(poped)))){
        poped = queue.pop();

        if (visitdict[poped.name]  == false) {
            visitdict[poped.name] = true
            //console.log(poped.name)
            colors[colors.length] = poped.name

            for (var i = 0; i < directions.length; i++){
                temp = adjacents(poped.name, directions[i], n)
                if ((visitdict[temp] != null) && (visitdict[temp] == false)){
                    queue.insert(dicta[temp])
                }
            }
        }
    }
    if (graph.reached(poped)) {
        return true;
    }
    else{
        return false;
    }
} // BY UTKARSH JAISWAL

