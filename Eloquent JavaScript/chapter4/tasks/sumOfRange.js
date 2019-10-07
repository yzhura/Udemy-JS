
function range (start, end, step) {
    var listRange = [];
    if (step == null) step = 1;
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            listRange.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            listRange.push(i);
        }
    }
    return listRange;
}

function sum (array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));