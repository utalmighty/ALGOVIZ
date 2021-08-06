//Functions for dynamic property of table.
function table_help_function(d) {
    divtable = document.getElementById('tablediv');
    tab = document.createElement('table');
    tab.setAttribute('id', 'dynamictable');
    tab.setAttribute('border', '1');
    if (screen.height < screen.width){
        tab.setAttribute('height', .50*screen.height);
        tab.setAttribute('width', .30*screen.width)
    }
    else{ // phone screen
        tab.setAttribute('height', screen.width);
        tab.setAttribute('width', screen.width)
    }
    cellpaddingarray = [20, 9, 6, 4, 3, 3, 2, 2, 2, 1];
    //tab.setAttribute('cellpadding', cellpaddingarray[parseInt((d / 10) - 1)]);
    tab.setAttribute('cellspacing', 0);
    divtable.appendChild(tab);
}
function maketable(density) {

    table_help_function(density);
    mytable = document.getElementById('dynamictable');
    for (i = 1; i <= density; i++) {
         newrow = document.createElement('tr');
         idname = 'r' + i;
         newrow.setAttribute('class', idname);
         for (j = 1; j <= density; j++) {
              newrow.appendChild(document.createElement('td'));
         }
         mytable.appendChild(newrow);
    }
}


//gives id to each cell in table, indexing start from 1
function idmaker() {
    for (var i = 0; i < document.querySelectorAll("td").length; i++) {
         document.querySelectorAll("td")[i].id = i + 1;
    }
}
// BY UTKARSH JAISWAL