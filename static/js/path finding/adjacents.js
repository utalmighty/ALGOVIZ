//return Adjacents of current cell.
function adjacents(curr, dirt, n) {
    //console.log("RECEIVED", curr, dirt, n, typeof(curr), typeof(n))
    if (dirt == 'U') {
         //console.log(curr-n, n*n);
         if (curr - n >= 1) {
              //console.log("Returning", curr-n);
              return curr - n;
         }
         else {
              //console.log("Returning null 1");
              return null;
         }
    }
    if (dirt == 'D') {
         //console.log(curr+n, n*n);
         if (curr + n <= n * n) {
              //console.log("Returning", curr+n);
              return curr + n;
         }
         else {
              //console.log("Returning null 2");
              return null;
         }
    }
    if (dirt == 'R') {
         if ((curr) % n != 0) {
              //console.log(curr+1, n*n);
              //console.log("Returning", curr+1);
              return curr + 1;
         }
         else {
              //console.log("Returning null 3");
              return null;
         }
    }
    if (dirt == 'L') {
         if (curr % n != 1) {
              //console.log(curr-1, n*n);
              //console.log("Returning", curr-1);
              return curr - 1;
         }
         else {
              //console.log("Returning null 4");
              return null;
         }
    }
}// BY UTKARSH JAISWAL