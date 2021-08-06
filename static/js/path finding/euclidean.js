
function euclidean(x1, y1, x2, y2) {
    // Returns euclidean between two points in 2-dimension space.
    return Math.sqrt(((x1-x2)**2) + ((y1-y2)**2));
} // BY UTKARSH JAISWAL

function heuristic(a, n) {  //heuristic means 'informed': here euclidean is heuristic function
    a = xycord(a,n)
    b = xycord(n*n,n)       // last cell

    return euclidean(a[0], a[1], b[0], b[1])

} // BY UTKARSH JAISWAL