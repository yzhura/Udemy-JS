document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.getElementById("switcher"),
        html = document.querySelector('html')

    switcher.addEventListener('click', () => {
        if(switcher.checked) {
            html.classList.remove('light')
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
            html.classList.add('light')
        }
    })
});