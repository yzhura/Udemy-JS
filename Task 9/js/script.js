window.addEventListener('DOMContentLoaded', function() {

    'use sctrict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(tabs) {
        for (let i = tabs; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
            tabContent[i].classList.remove('show');
        }
    }

    hideTabContent(1);

    function showTabContent(tabs) {
        if(tabContent[tabs].classList.contains('hide')) {
            tabContent[tabs].classList.remove('hide');
            tabContent[tabs].classList.add('show');
        }
    }

    info.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })


    //TIMER


    let deadline = '2019-12-31';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            
            if(seconds.textContent.length < 2) {
                seconds.textContent = '0' + t.seconds;
            } else if (minutes.textContent.length < 2) {
                minutes.textContent = '0' + t.minutes;
            } else if (hours.textContent.length < 2) {
                hours.textContent = '0' + t.hours;
            }
        }
    }

    setClock('timer', deadline);
});