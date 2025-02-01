// Controls the cell color on click.
let mouseButtonDown = false;

document.body.addEventListener('mousedown', (e) => {    
    mouseButtonDown = true;
});

document.body.addEventListener('mouseup', (e) => {
    mouseButtonDown = false;
})

function walltoggle() {
    for (var i = 0; i < document.querySelectorAll("td").length; i++) {
        document.querySelectorAll("td")[i].addEventListener('mouseover', function() {
            if (mouseButtonDown) {
                this.classList.toggle("wall");
            }
        });
    }
}

// BY UTKARSH JAISWAL