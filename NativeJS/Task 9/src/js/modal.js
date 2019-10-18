function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabBtn = document.querySelectorAll('.description-btn'),
        tabHolder = document.querySelector('.info');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    tabHolder.addEventListener('click', function (event) {
        target = event.target;
        if (target && target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
}

module.exports = modal;