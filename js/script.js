const sonic = document.querySelector('.sonic');
const trap = document.querySelector('.trap-disabled');


const jump = () => {
    sonic.classList.add('jumping');

    setTimeout(() => {
        
        sonic.classList.remove('jumping');
    }, 800);
}

const gameLooping = setInterval(() => {

    const trapPosition = trap.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (trapPosition <= 170 && trapPosition >= 20 && sonicPosition <= -40) {
        trap.style.animation = 'none';
        trap.style.left = `${trapPosition}px`;

        sonic.style.animation = 'none';
        sonic.style.left = `${sonicPosition}px`;

        sonic.src = 'https://art.pixilart.com/sr26f50c18724a6.png';

        sonic.style.width = '100px';
        sonic.style.marginLeft = '150px';
        sonic.style.marginBottom = '100px';

        trap.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SBzKeuXc6sTE-nF2YRH8F5-cpF21PHpokX3NtK4i8MPqaHTSFDEqt2kOT9XNxRSZzKI&usqp=CAU';

        trap.style.left = '33px';

        clearInterval(gameLooping);
    }
}, 10);

document.addEventListener('keydown', jump);