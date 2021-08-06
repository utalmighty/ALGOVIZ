
// flag is used when cells do not belong to same row or column
function animation(firstid, secondid, diretion, endfirstid, endsecondid, flag = false){
    var first = document.getElementById(firstid);
    var second = document.getElementById(secondid);
    var endfirst = document.getElementById(endfirstid);
    var endsecond = document.getElementById(endsecondid);
    var cell1 = document.getElementById("cell1");
    var cell2 = document.getElementById("cell2");
    var table = document.getElementById("dynamictable");
    
    cell1.style.position = "absolute";
    cell1.style.backgroundColor="red";
    cell1.style.width = first.offsetWidth;
    cell1.style.height = first.offsetHeight;
    cell1.style.opacity = "40%";

    cell2.style.position = "absolute";
    cell2.style.backgroundColor="blue";
    cell2.style.width = second.offsetWidth;
    cell2.style.height = second.offsetHeight;
    cell2.style.opacity = "40%";

    cell1.style.top = first.offsetTop + table.offsetTop;
    cell1.style.left = first.offsetLeft + table.offsetLeft;
    cell2.style.top = second.offsetTop + table.offsetTop;
    cell2.style.left = second.offsetLeft + table.offsetLeft;

    cell1.style.animationName = diretion;
    cell2.style.animationName = diretion;
    cell1.style.animationDuration = "2s";
    cell2.style.animationDuration = "2s";

    css = document.styleSheets[1];
    console.log(css);
    css.insertRule("@keyframes left {0%   {left:0px;} 100% {left:200px;}", css.cssRules.length);

}
// BY UTKARSH JAISWAL
