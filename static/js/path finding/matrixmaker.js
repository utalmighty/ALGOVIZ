//makes matrix of table with white represent 1(path), black represents 0 (wall).
function makematrix(matrix, n) {
    for (var i = 0; i < document.querySelectorAll("td").length; i++) {
         x = xycord(i + 1, n)[0];
         y = xycord(i + 1, n)[1];
         if (document.querySelectorAll("td")[i].classList.contains("wall")) {
              matrix[x][y] = 0;
         }
         else {
              matrix[x][y] = 1;
         }
    }
}
// BY UTKARSH JAISWAL