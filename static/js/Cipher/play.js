// first function to run, when play button is pressed.
function play(){
    if(document.getElementById('dynamictable') != null){
        document.getElementById('dynamictable').remove();
    }
    maketable(5); // Playfair Cipher has 5X5 table.
    idmaker(); // gives id to each cell index start from 1
    var key = document.getElementById('key').value;
    var message = document.getElementById('message').value;
    obj = new Matrix(key);
    obj.makepairs(message);
}

// BY UTKARSH JAISWAL