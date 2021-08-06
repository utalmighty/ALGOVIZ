function filltable(mat, n=5) {
    // To fill the table with the corresponding letters.
    for(var i = 0; i < n*n; i++){
        var xy = xycord(i+1, n);
        document.getElementById(i+1).innerHTML = mat[xy[0]][xy[1]];
    }
}

// BY UTKARSH JAISWAL