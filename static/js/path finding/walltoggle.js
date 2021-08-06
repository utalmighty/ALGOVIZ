// Controls the cell color on click.
function walltoggle() {
    for (var i = 0; i < document.querySelectorAll("td").length; i++) {
         document.querySelectorAll("td")[i].addEventListener("mouseover", function () { this.classList.toggle("wall"); });
    }
}
// BY UTKARSH JAISWAL