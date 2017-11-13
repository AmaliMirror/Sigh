function toggle(el) {
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
}
/*Окно регистраации*/
function buttone(){
    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение
    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его
    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;};
}
/*Конец Окно регистарации*/
/*Слайдер*/
document.addEventListener("DOMContentLoaded", function () {
    // Слайдер
    var label1=document.querySelector('#1');
    var label2=document.querySelector('#2');
    var label3=document.querySelector('#3');
    var circle=document.querySelectorAll('.circle');
    var i=0;
    var slideInterval = setInterval(nextSlide,5000);
    var slides=document.querySelectorAll('.slide');
    label1.addEventListener("click", function () {
        circle[0].style.background='white';
        circle[1].style.background='none';
        circle[2].style.background='none';
        slides[i].style.order=2;
        i=0;
        slides[i].style.order=1;
    });
    label2.addEventListener("click", function () {
        circle[0].style.background='none';
        circle[1].style.background='white';
        circle[2].style.background='none';
        slides[i].style.order=2;
        i=1;
        slides[i].style.order=1;
    });
    label3.addEventListener("click", function () {
        circle[0].style.background='none';
        circle[1].style.background='none';
        circle[2].style.background='white';
        slides[i].style.order=2;
        i=2;
        slides[i].style.order=1;
    });

    function nextSlide(){
        slides[i].style.order=2;
        circle[i].style.background='none';
        i++;
        if (i==3){
            i=0;
        }
        circle[i].style.background='white';
        slides[i].style.order=1;
    }
});
/*Конец Слайдер*/

/*Напишите нам*/
function buttone2(){
    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение
    var modalWin = document.getElementById('popupWin2'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его
    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;};
}
/*Конец Напишите нам*/
/*Карта*/

/*Конец Карта*/