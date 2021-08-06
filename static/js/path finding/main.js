// first function to run, controls sliders in pathfinding page.
function main(){
    var values = ['Slow', 'Medium', 'Fast'];
    var slide = document.getElementById('speedrange');
    var out = document.getElementById('speedspan');
    out.innerHTML = values[slide.value]
    slide.oninput = function() {
         out.innerHTML = values[this.value];
    }
    mytable = document.getElementById('dynamictable');

    densityarray = [10,20,30,40,50,60,70,80,90,100]
    var slider = document.getElementById("myRange");
    var output = document.getElementById("density");
    output.innerHTML = densityarray[slider.value];
    density = densityarray[slider.value];
    maketable(density);
    walltoggle();
    slider.oninput = function() {

         output.innerHTML = densityarray[this.value];
         density = densityarray[this.value]
         document.getElementById('dynamictable').remove();
         maketable(density);
         walltoggle();
    }
}

main()

// BY UTKARSH JAISWAL