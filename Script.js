let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container  = document.querySelector('.container');
let items      = container.querySelectorAll('.list .item');
let indicator  = document.querySelector('.indicators');
let dots       = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition  = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');

    dots[active].classList.add('active');
    indicator.querySelector('.number').innerText = '0' +  (active + 1);

    items[active].classList.add('active');
}

nextButton.onclick = () => {
    console.log('Next button clicked');
    if(active + 1 > lastPosition){
        active = 0;
    } else {
        active += 1;
    }
    setSlider();
}

prevButton.onclick = () => {
    console.log('Prev button clicked');
    if(active - 1 < firstPosition){
        active = lastPosition;
    } else {
        active -= 1;
    }
    setSlider();
}

setSlider();
