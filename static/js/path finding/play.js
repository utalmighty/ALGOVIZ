// Activtes on Click on start button.
function play() {
    var slider = document.getElementById("myRange");
    densityarray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    n = parseInt(densityarray[slider.value]); //slider lengthis currently 10.
    var matrix = new Array(n);
    for (i = 0; i < n; i++)
         matrix[i] = new Array(n);
    idmaker();
    makematrix(matrix, n);
    // Matrix Created.
    console.log(matrix);
    //change below code for all algorithms.
    selected = document.getElementById('algoselect');
    //selected.onchange()// change the visited class with none of html tags
    if (selected.value == 0){
        solvedijkstra(matrix, n);
    }
    else if (selected.value == 1){
        solveDFS(matrix, n);
    }
    else if (selected.value == 2){
        solveBFS(matrix, n)
    }
    else if (selected.value == 3){
        solveastar(matrix, n)
    }
}
// BY UTKARSH JAISWAL