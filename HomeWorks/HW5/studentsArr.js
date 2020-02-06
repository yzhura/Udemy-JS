const studentArr = [
    {
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,

    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
    },
];

class CreateStudent {
    constructor(student) {
        this.id = student.id;
        this.name = student.name;
        this.surname = student.surname;
        this.ratingPoints = student.ratingPoint;
        this.schoolPoint = student.schoolPoint;
        this.isSelfPayment = student.isSelfPayment;
        this.getFullInfo = function() {
            console.log(`Я - ${this.name}, рейтинговый бал - ${this.ratingPoints}, форма обучения - ${this.isSelfPayment == false ? 'бютжет' : 'контракт'}`);
        };
        this.getRankedPlace = function() {
            let oldArr = [...studentArr];
            console.log(oldArr);
            oldArr.sort(sortByRating);
            console.log(oldArr);
        };
    }
}; 

function sortByRating(item1, item2) {
    if(item2.ratingPoints == item1.ratingPoints) {
        return item2.schoolPoint - item1.schoolPoint;
    }
    return item2.ratingPoints - item1.ratingPoints;
}

function sortById(item1, item2) {
    return  item1.id - item2.id;
}

const setAllCreatedStudentsByConstructor = arrOfStudents => {
    let newArr = [];
    let oldArr = [...arrOfStudents]
    const maxSizeBudget = 5;
    const minBudgetPoints = 800;

    oldArr.forEach((item, index) => {
        item.id = index;
        item.isSelfPayment = true;
        if(item.ratingPoint >= minBudgetPoints ) {
            item.isSelfPayment = false;
        }
        newArr.push(
            new CreateStudent(
                item
            )
        )
    })

    newArr.sort(sortByRating);

    newArr.forEach((item, index)=> {
        if (index >= maxSizeBudget) {
            item.isSelfPayment = true;
        }
    })

    newArr.sort(sortById);

    return newArr;
}

const newStudentsArr = setAllCreatedStudentsByConstructor(studentArr);

console.log(newStudentsArr);

