window.addEventListener('DOMContentLoaded', function() {
    
    let age = document.getElementById('age');
    
    let user = {
        name: 'John',
        value: age.value
    }
    
    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }

    showUser.apply(user);

});