function reverseArray(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--) 
        output.push(array[i]);
    return output;
}
  
function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(reverseArray(["A", "B", "C"]));