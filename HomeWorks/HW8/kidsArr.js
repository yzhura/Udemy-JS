const kidsArr = [
    {
        name: 'Kostya',
        age: 10,
        gender: 'male',
    },
    {
        name: 'Vasya',
        age: 9,
        gender: 'male',
    },
    {
        name: 'Masha',
        age: 9,
        gender: 'female',
    },
    {
        name: 'Mitya',
        age: 8,
        gender: 'male',
    },
];


// Task 1

function clos() {
    let sum = 0;
    return function(num) {
        sum += num;
        console.log(sum);
        return sum;
    }
}

const counter = clos();

counter(3) // 3
counter(5) // 8
counter(228) // 236



// Task 2

function closArr() {
    let arr = [];
    return function(data) {
        data ? arr.push(data) : arr.length = 0;
        console.log(arr);
        return arr;
    }
}

let getUpdatedArr = closArr();


getUpdatedArr(3) // [3]
getUpdatedArr(5) // [3, 5]
getUpdatedArr({name: 'Vasya'}) // [3, 5, {}]
getUpdatedArr() // []
getUpdatedArr(4) // [4]