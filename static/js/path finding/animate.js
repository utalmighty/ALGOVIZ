//Animations and coloring.
function colorit(colors) {
    for (i = 0; i < colors.length; i++) {
         animate(colors[i],i, 'visited');
    }
}
// BY UTKARSH JAISWAL

function animate(id, i, c) {
     t = document.getElementById('speedrange').value;
     if (t == 0) { //slow
         s = 60;
    }
    else if (t == 1) { // medium
         s = 35;
    }
    else { //fast
         s = 8;
    }
    setTimeout(function () {
         document.getElementById(id).classList = (c);
    }, s * i);
}
// BY UTKARSH JAISWAL

function traceoutpath(tracelist) {
     for (var p = 0; p < tracelist.length; p++) {
          animate(tracelist[p], colors.length+p, 'path');
     }
 }

 function clearPath() {
     // without while loop this functionaly isnt working
     while (document.getElementsByClassName("visited").length > 0) {
          const elements = document.getElementsByClassName("visited");
          for (let i=0; i<elements.length; i+=1) {
               elements[i].classList.remove("visited");
          }
     }

     // without while loop this functionaly isnt working
     while (document.getElementsByClassName("path").length > 0) {
          const elements = document.getElementsByClassName("path");
          for (let i=0; i<elements.length; i+=1) {
               elements[i].classList.remove("path");
          }
     }
     
 }

// BY UTKARSH JAISWAL
