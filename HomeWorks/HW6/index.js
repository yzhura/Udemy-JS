const arrOfUsers = []
for (let i = 0; i < 50; i ++) {
    let fakeData = faker.helpers.createCard()
    arrOfUsers.push(fakeData)
}

/////////////////// Не тогаем то что выше!!! ?///////////////

function Customer(id, name, username, email, phone, website, company, posts, accountHistory) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.company = company;
    this.posts = posts;
    this.accountHistory = accountHistory;
}

let customerInstancessArr = [];

function copyCostumerData () {
    for(let i = 0; i < arrOfUsers.length; i++) {
        customerInstancessArr.push(
            new Customer(
                i,
                arrOfUsers[i].name,
                arrOfUsers[i].username,
                arrOfUsers[i].email,
                arrOfUsers[i].phone,
                arrOfUsers[i].website,
                arrOfUsers[i].company,
                arrOfUsers[i].posts,
                arrOfUsers[i].accountHistory
            )
        )
    }
}

copyCostumerData();

// console.log(customerInstancessArr);

function getAllNameSAndEmails() {
    let namesAndEmailsArr = [];
    for(let i = 0; i < customerInstancessArr.length; i++) {
        namesAndEmailsArr.push(
            {
                name: `${customerInstancessArr[i].name}`,
                email: `${customerInstancessArr[i].email}`
            }
        )
    }

    return namesAndEmailsArr;
}

function getAllCustomersWithComDomain() {
    let idsCustomer = [];
    for(let i = 0; i < customerInstancessArr.length; i++) {
        if(customerInstancessArr[i].website.includes('.com')) {
            idsCustomer.push(
                customerInstancessArr[i].id
            )
        }
    }
    return idsCustomer;
}

function getAllGmailCustomers() {
    let gmailsCustomer = [];
    for(let i = 0; i < customerInstancessArr.length; i++) {
        if(customerInstancessArr[i].email.includes('gmail.com')) {
            gmailsCustomer.push(
                customerInstancessArr[i].id
            )
        }
    }
    return gmailsCustomer;
}