const sliderLine = document.querySelector('.slider__line');
const sliderBtn  = document.querySelector('.slider__btns');
const menu       = document.querySelector('.menu');

let detect = new MobileDetect(window.navigator.userAgent)

if(detect.mobile()){

    document.onclick = (event)=>{
        if(event.target.classList.contains('btn')){
            event.target.classList.add('btn-active');

            setTimeout(()=>{
                event.target.classList.remove('btn-active');
            }, 700)
        }
    }

    document.onpointerover = (event)=>{
        if(event.target.classList.contains('btn')){
            event.target.classList.add('btn-active');
        }
    }

    document.onpointerout = (event)=>{
        if(event.target.classList.contains('btn')){
            event.target.classList.remove('btn-active');
        }
    }

} else {

    document.onpointerover = (event)=>{
        if(event.target.classList.contains('btn')){
            event.target.classList.add('btn-active');
        }
    }

    document.onpointerout = (event)=>{
        if(event.target.classList.contains('btn')){
            event.target.classList.remove('btn-active');
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{

    uprise(menu.children[0].children, true); 
})

menu.onclick = (event)=>{

    if(event.target.id == 'menu-item-timer'){
        for (let i = 0; i < sliderBtn.children.length; i++) {

            if(sliderBtn.children[i].classList.contains('slider__btns__btn--active')){

                sliderBtn.children[i].classList.remove('slider__btns__btn--active');
            }
        }

        sliderBtn.children[0].classList.add('slider__btns__btn--active');
        sliderBtn.children[0].style.backgroundImage = 'url(' + '../images/timer-white.png' +')';
        
        sliderLine.style.transform = 'translateX(' + 0 + 'px)';

        closeMenu();

        uprise(document.querySelectorAll('.js-timer-watch'), false); 
        uprise(document.querySelectorAll('.js-timer-btns-one'), false); 
        uprise(document.querySelectorAll('.js-timer-btns-two'), false); 

        uprise(document.querySelectorAll('.js-stopwatch-watch'), false); 
        uprise(document.querySelectorAll('.js-stopwatch-btns'), false); 
    }

    if(event.target.id == 'menu-item-stopwatch'){
        for (let i = 0; i < sliderBtn.children.length; i++) {

            if(sliderBtn.children[i].classList.contains('slider__btns__btn--active')){

                sliderBtn.children[i].classList.remove('slider__btns__btn--active');
            }
        }

        sliderBtn.children[1].classList.add('slider__btns__btn--active');
        sliderBtn.children[1].style.backgroundImage = 'url(' + '../images/sand-clock-white.png' +')';
       
        sliderLine.style.transform = 'translateX(' + -window.innerWidth + 'px)';

        closeMenu();

        uprise(document.querySelectorAll('.js-stopwatch-watch'), false); 
        uprise(document.querySelectorAll('.js-stopwatch-btns'), false); 

        uprise(document.querySelectorAll('.js-timer-watch'), false); 
        uprise(document.querySelectorAll('.js-timer-btns-one'), false); 
        uprise(document.querySelectorAll('.js-timer-btns-two'), false); 
    }

    if(event.target.id == 'menu-item-options'){
        for (let i = 0; i < sliderBtn.children.length; i++) {

            if(sliderBtn.children[i].classList.contains('slider__btns__btn--active')){

                sliderBtn.children[i].classList.remove('slider__btns__btn--active');
            }
        }

        sliderBtn.children[2].classList.add('slider__btns__btn--active');
        sliderBtn.children[2].style.backgroundImage = 'url(' + '../images/settings-white.png' +')';

        sliderLine.style.transform = 'translateX(' + (-window.innerWidth * 2) + 'px)';

        closeMenu();
    }
}

sliderBtn.onclick = (event)=>{

    if(event.target.id == 'slider-btn-one'){

        for (let i = 0; i < sliderBtn.children.length; i++) {

            if(sliderBtn.children[i].classList.contains('slider__btns__btn--active')){

                sliderBtn.children[i].classList.remove('slider__btns__btn--active');
            }
        }

        event.target.classList.add('slider__btns__btn--active');
        event.target.style.backgroundImage = 'url(' + '../images/timer-white.png' +')';

        sliderBtn.children[1].style.backgroundImage = 'url(' + '../images/sand-clock-black.png' +')';
        sliderBtn.children[2].style.backgroundImage = 'url(' + '../images/settings-black.png' +')';
    
        sliderLine.style.transform = 'translateX(' + 0 + 'px)';
    }

    if(event.target.id == 'slider-btn-two'){

        for (let i = 0; i < sliderBtn.children.length; i++) {

            if(sliderBtn.children[i].classList.contains('slider__btns__btn--active')){

                sliderBtn.children[i].classList.remove('slider__btns__btn--active');
            }
        }

        event.target.classList.add('slider__btns__btn--active');
        event.target.style.backgroundImage = 'url(' + '../images/sand-clock-white.png' +')';

        sliderBtn.children[0].style.backgroundImage = 'url(' + '../images/timer-black.png' +')';
        sliderBtn.children[2].style.backgroundImage = 'url(' + '../images/settings-black.png' +')';
    
        sliderLine.style.transform = 'translateX(' + -window.innerWidth + 'px)';
    }

    if(event.target.id == 'slider-btn-tree'){

        for (let i = 0; i < sliderBtn.children.length; i++) {

            if(sliderBtn.children[i].classList.contains('slider__btns__btn--active')){

                sliderBtn.children[i].classList.remove('slider__btns__btn--active');
            }
        }

        event.target.classList.add('slider__btns__btn--active');
        event.target.style.backgroundImage = 'url(' + '../images/settings-white.png' +')';
        
        sliderBtn.children[0].style.backgroundImage = 'url(' + '../images/timer-black.png' +')';
        sliderBtn.children[1].style.backgroundImage = 'url(' + '../images/sand-clock-black.png' +')';
    
        sliderLine.style.transform = 'translateX(' + (-window.innerWidth * 2) + 'px)';
    }
}

sliderLine.onclick = (event)=>{

    if(event.target.classList.contains('arrow-up')){ // Анимация для всех кнопок arrow-up

        event.target.classList.add('arrow-up--active');
        
        // Если была нажата кнопка, отвечающая за часы и при этом на табле меньше 99, то значение декрементируется
        if((event.target.parentElement.id == 'timer-hour' || event.target.parentElement.id == 'stopwatch-hour') && +event.target.parentElement.children[1].innerText < 99){
            
            // Если значение меньше 9, то к новому значению будет с лева приписываться 0
            if(+event.target.parentElement.children[1].innerText < 9){

                event.target.parentElement.children[1].innerText = '0'+ (+event.target.parentElement.children[1].innerText + 1);

            } else {

                event.target.parentElement.children[1].innerText = +event.target.parentElement.children[1].innerText + 1;
            }

            // Если была нажата кнопка, отвечающая за часы и при этом на табле равно 99, то значение будет равно 00
        } else if((event.target.parentElement.id == 'timer-hour' || event.target.parentElement.id == 'stopwatch-hour') && +event.target.parentElement.children[1].innerText == 99){

            event.target.parentElement.children[1].innerText = '00';

        } 

        // Если была нажата кнопка, отвечающая за минуты или секунды и при этом на табле меньше 60, то значение декрементируется
        if(((event.target.parentElement.id == 'timer-minute' || event.target.parentElement.id == 'stopwatch-minute') || (event.target.parentElement.id == 'timer-seconds' || event.target.parentElement.id == 'stopwatch-seconds')) && +event.target.parentElement.children[1].innerText < 60){
            
            if(+event.target.parentElement.children[1].innerText < 9){

                event.target.parentElement.children[1].innerText = '0'+ (+event.target.parentElement.children[1].innerText + 1);

            } else {

                event.target.parentElement.children[1].innerText = +event.target.parentElement.children[1].innerText + 1;
            }

        } else if(((event.target.parentElement.id == 'timer-minute' || event.target.parentElement.id == 'stopwatch-minute') || (event.target.parentElement.id == 'timer-seconds' || event.target.parentElement.id == 'stopwatch-seconds')) &&  +event.target.parentElement.children[1].innerText == 60){

            event.target.parentElement.children[1].innerText = '00';

        } 

        // Через 3 милисекунды стрелка возвращается на изначальное положение
        setTimeout(()=>{

            event.target.classList.remove('arrow-up--active')
        }, 300);
    }

    if(event.target.classList.contains('arrow-down')){ // Анимация для всех кнопок arrow-down

        event.target.classList.add('arrow-down--active');

        if((event.target.parentElement.id == 'timer-hour' || event.target.parentElement.id == 'stopwatch-hour') && +event.target.parentElement.children[1].innerText > 0){

            if(+event.target.parentElement.children[1].innerText <= 10){

                event.target.parentElement.children[1].innerText = '0'+ (+event.target.parentElement.children[1].innerText - 1);

            } else {

                event.target.parentElement.children[1].innerText = +event.target.parentElement.children[1].innerText - 1;
            }

        } else if((event.target.parentElement.id == 'timer-hour' || event.target.parentElement.id == 'stopwatch-hour') && +event.target.parentElement.children[1].innerText == 0){

            event.target.parentElement.children[1].innerText = 99;
        }

        if(((event.target.parentElement.id == 'timer-minute' || event.target.parentElement.id == 'stopwatch-minute') || (event.target.parentElement.id == 'timer-seconds' || event.target.parentElement.id == 'stopwatch-seconds')) && +event.target.parentElement.children[1].innerText > 0){
            
            if(+event.target.parentElement.children[1].innerText <= 10){

                event.target.parentElement.children[1].innerText = '0'+ (+event.target.parentElement.children[1].innerText - 1);

            } else {

                event.target.parentElement.children[1].innerText = +event.target.parentElement.children[1].innerText - 1;
            }

        } else if(((event.target.parentElement.id == 'timer-minute' || event.target.parentElement.id == 'stopwatch-minute') || (event.target.parentElement.id == 'timer-seconds' || event.target.parentElement.id == 'stopwatch-seconds')) &&  +event.target.parentElement.children[1].innerText == 0){

            event.target.parentElement.children[1].innerText = 60;

        } 

        setTimeout(()=>{

            event.target.classList.remove('arrow-down--active')
        }, 300);
    }

    // Добавление времени для таймера
    if(event.target.id == 'timer-layout-10'){

        event.target.parentElement.parentElement.children[0].children[1].children[1].innerText = 10;
    }

    if(event.target.id == 'timer-layout-15'){

        event.target.parentElement.parentElement.children[0].children[1].children[1].innerText = 15;
    }

    if(event.target.id == 'timer-layout-20'){

        event.target.parentElement.parentElement.children[0].children[1].children[1].innerText = 20;
    }

    // Удаление значения из таймера
    if(event.target.id == 'timer-delete'){

        event.target.parentElement.parentElement.children[0].children[0].children[1].innerText = '00';
        event.target.parentElement.parentElement.children[0].children[1].children[1].innerText = '00';
        event.target.parentElement.parentElement.children[0].children[2].children[1].innerText = '00';
    }
}


function uprise(collection, delay){ // Функция для анимации появления элементов

    for (let i = 0; i < collection.length; i++) {
    
        collection[i].classList.remove('hidden');

        collection[i].classList.add('uprise');

        if(delay){

            collection[i].style.transitionDelay = `${i*.6}s`;
        } 
    }
}

function closeMenu(){

    menu.style.opacity = 0;

    setTimeout(()=>{
        menu.style.display = 'none';
    }, 800)
}

// Дописать функции старта
function timerStart(){

}

function stopwatchStart(){

}