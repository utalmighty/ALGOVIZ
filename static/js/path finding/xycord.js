// returns the xycord of enumerated i-th element in 2D array of size nXn.
function xycord(i, n){
    i = i-1
    x = parseInt(i/n)
    y = i%n
    return [x,y]
}
// BY UTKARSH JAISWAL