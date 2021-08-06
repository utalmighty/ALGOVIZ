

// Make basic initializations for dijkstra Algo and prints necessary Debugging infos.
function solvedijkstra(matrix, n) {
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
     dijkstra(graph, visitdict, costdict, dictofnodes, n);
     console.log("Visited>>" + visitdict);
     console.log("Cost>>" + costdict);
     endTime = new Date();
     var timeDiff = endTime - startTime;
     timeDiff /= 10000;
     console.log("Time Elapsed> " + timeDiff);
}
// BY UTKARSH JAISWAL

// Relaxation in Dijkstra.
function relax(frm, to, costdict, costto = 1) {
     if ((costdict[frm] + costto) < costdict[to]) {
          trace[to] = frm;
          costdict[to] = costdict[frm] + costto;
     }
     return;
}// BY UTKARSH JAISWAL


// Returns the minimum of not visited.
function minimumofnotvisited(visitdict, costdict) {
     //""" returns the inex of not visited with smallest cost used in dijkstra."""
     mini = 2 ** 32;
     idx = -1;
     keyss = intparser(Object.keys(visitdict));
     for (var a = 0; a < keyss.length; a++) {
          if ((visitdict[keyss[a]] == false) && (costdict[keyss[a]] < mini)) {
               mini = costdict[keyss[a]];
               idx = keyss[a];
          }
     }
     return idx;
}// BY UTKARSH JAISWAL


//Dijkstra Algorithm
function dijkstra(graph, visitdict, costdict, dicta, n) {
     colors = [];
     curr = graph.start;
     start = graph.start.name;
     directions = 'RDUL';
     costdict[curr.name] = 0;
     trace = {}
     tracelist = []

     //console.log(visitdict);
     while (!(graph.reached(curr))) {
          for (var a = 0; a < directions.length; a++) {
               temp = adjacents(curr.name, directions[a], n);
               //console.log(">> "+ curr.name, directions[a], temp, keyss.includes(temp), visitdict[temp]);
               if ((visitdict[temp] != null) && (visitdict[temp] == false)) {
                    relax(curr.name, temp, costdict);
               }
          }
          visitdict[curr.name] = true;
          minimum = minimumofnotvisited(visitdict, costdict);
          colors[colors.length] = minimum;
          //document.getElementById(minimum).classList.toggle('carpet');
          curr = dicta[minimum];
     }
     colorit(colors);

     present = curr.name;
     while (present != start){
          tracelist[tracelist.length] = present
          present = trace[present]
     }
     console.log("Nodes Visited >>", colors.length);
     console.log('Path Length >> ', tracelist.length);
     traceoutpath(tracelist);
}
// BY UTKARSH JAISWAL
