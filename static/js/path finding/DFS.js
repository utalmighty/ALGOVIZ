colors = []
function solveDFS(matrix, n) {
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
    if (dfs(graph.start, graph, dictofnodes, visitdict, keys ,n)){
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

function dfs(root, graph, dictofnodes, visitdict, keys, n){
    directions = 'DRLU';
    if (graph.reached(root)){
        return true
    }
    if (visitdict[root.name] == true){
        //console.log("here")
        return false
    }
    visitdict[root.name] = true
    for (var i = 0; i < directions.length; i++) {
        //console.log(root.name, i)        
        temp = adjacents(root.name, directions[i], n)
        if ((visitdict[temp] != null) && (visitdict[temp] == false)) {
            colors[colors.length] = dictofnodes[temp].name;
            //console.log(dictofnodes[temp].name);
            if (dfs(dictofnodes[temp], graph, dictofnodes, visitdict, keys, n) == true){
                return true
            }
        }
    }
}// BY UTKARSH JAISWAL