const emplyeeArr = [
    {
        id: 0,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 1,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480, 
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 3,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430, 
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150, 
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730, 
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 6,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730, 
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190, 
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790, 
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260, 
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 10,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300, 
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];

function Emploee(id, name, surname, salary, workExperience, isPrivileges, gender) {
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.salary = salary,
    this.workExperience = workExperience,
    this.isPrivileges = isPrivileges,
    this.gender = gender,
    this.getFullName = function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const employeeObj = new Emploee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');

// console.log(employeeObj);
// employeeObj.getFullName();

let createEmployesFromArr = (arr) => {
    arr.unshift(employeeObj);
    let newArr = [];
    arr.forEach(item => {
        newArr.push(new Emploee(
            item.id, 
            item.name,
            item.surname,
            item.salary,
            item.workExperience,
            item.isPrivileges,
            item.gender)
        )
    })
    return newArr;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

// console.log(emplyeeConstructArr);

const getFullNamesFromArr = (arr) => {
    let names = arr.map(item => {
        return item.getFullName();
    })
    return names;
}

// getFullNamesFromArr(emplyeeConstructArr);

const getMiddleSalary = (arr) => {
    let salaries = []
    arr.forEach(item => {
        salaries.push(item.salary);
    })
    console.log(salaries);
    let sum = salaries.reduce((sum, current) => sum + current, 0);
    console.log(sum / arr.length)
}

// getMiddleSalary(emplyeeConstructArr) /// 1560 (другое значение)
