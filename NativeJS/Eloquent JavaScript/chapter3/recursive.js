
// Ex 1
function power (base, exponent) {
    if (exponent == 0) {
        return 1;
    } else 
        return base * power(base, exponent - 1);
}

console.log(power(4,15));


// Ex 2
function findSolution(target) {
    function find(start, history) {
        if (start == target) {
            return history;
        } else if (start > target) {
            return null;
        } else
            return find (start + 5, "(" + history + " + 5)") || find (start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}

console.log(findSolution(13));

// find(1, "1")
//   find(6, "(1 + 5)")
//     find(11, "((1 + 5) + 5)")
//       find(16, "(((1 + 5) + 5) + 5)")
//         too big
//       find(33, "(((1 + 5) + 5) * 3)")
//         too big
//     find(18, "((1 + 5) * 3)")
//       too big
//   find(3, "(1 * 3)")
//     find(8, "((1 * 3) + 5)")
//       find(13, "(((1 * 3) + 5) + 5)")
//         found!»

// Отрывок из книги: Марейн Хавербеке. «Выразительный JavaScript». Apple Books. 