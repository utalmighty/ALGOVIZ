class Matrix {
    constructor(key, n=5){
    this.size = n;
    this.matrix = [];
    this.cache = {}; // stores enumerated positions
    for (var i = 0; i< this.size; i++) {
        this.matrix[this.matrix.length]= [0,0,0,0,0];
    }
    this.keysquare(key)
    }

    sanitize(word) { 
        // Member function for Santizing the inputs.
        word = word.toUpperCase();
        var l = [];
        for (var i = 0; i<word.length; i++){
            if ((word.charCodeAt(i)>=65) && (word.charCodeAt(i)<=90)){
                l[l.length] = word.charAt(i);
            }
        }
        return l.join('');
    }

    keysquare(key) {
        key = this.sanitize(key);
        var hash = {};
        var curr = 0;
        var alpha = key;
        for(var a = 0; a < 2; a++) {
            for (var i = 0; i < alpha.length; i++){
                if(alpha[i] == 'J'){ // 'I' and 'J' are same PLAYFAIR CIPHER
                    if (hash["I"] != true) {
                        hash["I"] = true;
                        this.cache["I"] = curr;
                        rc = xycord(curr+1, this.size);
                        curr += 1;
                        this.matrix[rc[0]][rc[1]] = alpha[i];
                    }
                }
                else if (hash[alpha[i]] != true) {
                    hash[alpha[i]] = true;
                    this.cache[alpha[i]] = curr;
                    var rc = xycord(curr+1, this.size);
                    curr += 1;
                    this.matrix[rc[0]][rc[1]] = alpha[i];
                }
            }
            alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        this.cache['J'] = this.cache['I'];
        filltable(this.matrix);
        console.log("Matrix Created", this.matrix, "Cache", this.cache);
    }
        
    makepairs(word){
        console.log("Generating Pairs");
        word = this.sanitize(word);
        var pairs = [];
        var i = 0;
        while(i < word.length){
            var l = word[i];
            if (i == word.length-1) { // Alone problem
                if (l != 'Z'){
                    r = 'Z'
                }
                else {
                    r = 'X' 
                }
                i += 1;
            }
            else {
                var r = word[i+1];
                if  (l == r) { // Dublicate Problem
                    if (l != 'Z') {
                        r = 'Z';
                    }
                    else {
                        r = 'X';
                    }
                    i += 1;
                }
                else {
                    i += 2;
                }
            }
            pairs[pairs.length ] = l+r;
        }
        for(var i = 0; i<pairs.length; i++) { // JUST PRINTING, REMOVE IN PRODUCTION.
            var temp = this.encrypt(pairs[i]);
            console.log(pairs[i], "-->", temp, "-->", this.decrypt(temp));
        }
    }

    leftshift(curr, move){
        var rc = xycord(curr+1, this.size);
        rc[1] -= move;
        if (rc[1] < 0) {
            rc[1] +=  this.size;
        }
        return enumerator(rc[0], rc[1], this.size);
    }

    rightshift(curr, move) {
        var rc = xycord(curr+1, this.size);
        rc[1] = (rc[1]+move)%this.size;
        return enumerator(rc[0], rc[1], this.size);
    }

    upshift(curr, move){
        var rc = xycord(curr+1, this.size);
        rc[0] -= move;
        if (rc[0] < 0) {
            rc[0] +=  this.size;
        }
        return enumerator(rc[0], rc[1], this.size)
    }

    downshift(curr, move){
        var rc = xycord(curr+1, this.size);
        rc[0] = (rc[0]+move)%this.size;
        return enumerator(rc[0], rc[1], this.size);
    }

    encrypt(pair) {
        // Right, Down
        var lcord = this.cache[pair[0]];
        var rcord = this.cache[pair[1]];
        var lxy = [];
        var rxy = [];
        if (xycord(lcord+1, this.size)[0] == xycord(rcord+1, this.size)[0]) { // SAME ROW => Right Shift
            var endfirst = this.rightshift(lcord, 1)+1;
            var endsecond = this.rightshift(rcord, 1)+1;
            lxy = xycord(endfirst, this.size);
            rxy = xycord(endsecond, this.size);
            animation(lcord+1, rcord+1, 'right', endfirst, endsecond);
            return this.matrix[lxy[0]][lxy[1]] + this.matrix[rxy[0]][rxy[1]];
        }
        
        if (xycord(lcord+1, this.size)[1] == xycord(rcord+1, this.size)[1]) { // SAME COLUMN => Down Shift
            var endfirst = this.downshift(lcord, 1)+1;
            var endsecond = this.downshift(rcord, 1)+1;
            lxy = xycord(endfirst, this.size);
            rxy = xycord(endsecond, this.size);
            animation(lcord+1, rcord+1, 'down', endfirst, endsecond);
            return this.matrix[lxy[0]][lxy[1]] + this.matrix[rxy[0]][rxy[1]];
        }
        else {// Different ROW and COLUMN.
            lxy = xycord(lcord+1, this.size);
            rxy = xycord(rcord+1, this.size);
            var endfirst = this.matrix[lxy[0]][rxy[1]];
            var endsecond = this.matrix[rxy[0]][lxy[1]];
            animation(lcord+1, rcord+1, 'encrypt', this.cache[endfirst]+1, this.cache[endsecond]+1, true);
            return endfirst + endsecond;
        }
    }

    decrypt(pair){ // =========enable animation for decrypt.
        // Left, Up
        var lcord = this.cache[pair[0]];
        var rcord = this.cache[pair[1]];
        var lxy = [];
        var rxy = [];
        if (xycord(lcord+1, this.size)[0] == xycord(rcord+1, this.size)[0]) { // SAME ROW => Left Shift
            var endfirst = this.leftshift(lcord, 1)+1;
            var endsecond = this.leftshift(rcord, 1)+1;
            lxy = xycord(endfirst, this.size);
            rxy = xycord(endsecond, this.size);
            //animation(lcord+1, rcord+1, 'left', endfirst, endsecond);
            return this.matrix[lxy[0]][lxy[1]] + this.matrix[rxy[0]][rxy[1]]
        }
        if (xycord(lcord+1, this.size)[1] == xycord(rcord+1, this.size)[1]) { // SAME COLUMN => Up Shift
            var endfirst = this.upshift(lcord, 1)+1;
            var endsecond = this.upshift(rcord, 1)+1;
            lxy = xycord(endfirst, this.size);
            rxy = xycord(endsecond, this.size);
            //animation(lcord+1, rcord+1, 'up', endfirst, endsecond);
            return this.matrix[lxy[0]][lxy[1]] + this.matrix[rxy[0]][rxy[1]];
        }
        else { // Different ROW and COLUMN.
            lxy = xycord(lcord+1, this.size);
            rxy = xycord(rcord+1, this.size);
            var endfirst = this.matrix[lxy[0]][rxy[1]];
            var endsecond = this.matrix[rxy[0]][lxy[1]];
            //animation(lcord+1, rcord+1, 'decrypt', this.cache[endfirst]+1, this.cache[endsecond]+1, true);
            return endfirst + endsecond;
        }
    }
}