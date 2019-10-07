
function countBs(string) {
    return countChar(string, "B");
}

function countChar(string, letter) {
    var counter = 0;
    for(i=0; i < string.length; i++) {
        if(string[i] == letter) { // или if(string.charAt(i) == letter) 
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BBaBBsdfsdbf"));
console.log(countChar("kakkerlak", "l"));