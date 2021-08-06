
//uesd to clear the cells.
function clearpath(wall = false) {// use 'clearpath(wall = true)' to clear with walls (clear button).
    //console.log("triggered");
    var a = document.querySelectorAll(".visited")
    var b = document.querySelectorAll(".path")
    for (var i = 0; i < a.length; i++) {
        a[i].classList.remove('visited');
    }
    for (var i = 0; i < b.length; i++) {
        b[i].classList.remove('path');
    }
    if (wall == true) {
        var c = document.querySelectorAll(".wall");
        for (var i = 0; i < c.length; i++) {
            c[i].classList.remove('wall');
        }
    }
}// BY UTKARSH JAISWAL