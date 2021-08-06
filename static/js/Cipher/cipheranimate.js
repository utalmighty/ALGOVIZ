//Animations and coloring in cipher.
function cipheranimate(id, id2, c, remove = false, i=10) {
    t = document.getElementById('speedrange').value; // higher value ~ Higher speed
     if (t == 0) { //slow
         s = 60;
    }
    else if (t == 1) { // medium
         s = 35;
    }
    else { //fast
         s = 8;
    }
    if(!remove){
        setTimeout(function () {
            document.getElementById(id).classList = (c);
            document.getElementById(id2).classList = (c);
        }, s * i);
    }
    else {
        setTimeout(function () {
            document.getElementById(id).removeClass(c);
            document.getElementById(id2).removeClass(c);
        }, s * i);
    }
}
// BY UTKARSH JAISWAL

