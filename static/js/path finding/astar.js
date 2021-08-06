
// Make basic initializations for astar Algo and prints necessary Debugging infos.
function solveastar(matrix, n) {
    //""" Makes basic initialization and prints the answer """
    infinity = 2 ** 32;
    p = createnodes(matrix, n);
    dictofnodes = p[0];
    graph = p[1];
    visitdict = {};
    costdict = {};
    keyss = intparser(Object.keys(dictofnodes));
    console.log("Number of nodes Created:", keyss.length);
    for (var i = 0; i < keyss.length; i++) {
         visitdict[keyss[i]] = false;
         costdict[keyss[i]] = infinity;
         //console.log(keyss[i]);
    }

    startTime = new Date();
    astar(graph, visitdict, costdict, dictofnodes, n);
    console.log("Visited>>" + visitdict);
    console.log("Cost>>" + costdict);
    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 10000;
    console.log("Time Elapsed> " + timeDiff);
}// BY UTKARSH JAISWAL


//A-Star algorithm.
function astar(graph, visitdict, costdict, dicta, n) {
    // A star algorithm
    colors = []
    curr = graph.start;
    start = graph.start;
    directions = 'DRUL';
    costdict[curr.name] = 0;
    trace = {} //dictionary for tracbacking.
    tracelist = []

    heap = new Minheap();

    while (!(graph.reached(curr))) {
        for (var i = 0; i < directions.length; i++){
            temp = adjacents(curr.name, directions[i], n);
            if ((visitdict[temp] != null) && (visitdict[temp] == false)) {
                a_relax(curr.name, temp, costdict)
                
                indx = heap.ispresent(temp);
                if (indx != null) {
                    // if already present 
                    if (heap.list[indx].comb_heuristic >= costdict[temp]+heuristic(temp, n)){
                        // if new heuristic value is less than old heuristic value.
                        ret = heap.list[indx];
                        heap.list[indx].comb_heuristic = -1; //DELETING THE NODE BY MAKING IT -1(least value) nad extracing minimum one
                        heap.heapifyup(indx);
                        heap.pop();
                        
                        node = new Astar_node(temp, curr.name, costdict[temp], costdict[temp]+heuristic(temp, n));
                        heap.insert(node);
                    }
                }
                else {
                    node = new Astar_node(temp, curr.name, costdict[temp], costdict[temp]+heuristic(temp, n));
                    heap.insert(node);
                }
            }
        }   
        visitdict[curr.name] = true;
        poped = heap.pop();
        curr = dicta[poped.name];
        colors[colors.length] = curr.name;
        //console.log(curr.name);
        trace[poped.name]  = poped;
    }
    colorit(colors);


    present = poped.name;
    while(present != start.name) {
        //console.log(present)
        tracelist[tracelist.length] = present;
        present = trace[present].via ;
    }
    console.log("Nodes Visited >>", colors.length+1);
    console.log('Path Length >> ', tracelist.length);
    traceoutpath(tracelist);
} // BY UTKARSH JAISWAL

// Relaxation in Astar.
function a_relax(frm, to, costdict, costto = 1) {
    if ((costdict[frm] + costto) < costdict[to]) {
         costdict[to] = costdict[frm] + costto;
    }
    return;
} // BY UTKARSH JAISWAL

