/* 1) Повесить на кнопку обработчик события click и реализовать такой функционал:

В input[type=text] можно ввести цвет: red, green, blue и так далее.
По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата

*/

const btn = document.getElementById('btn')
const text = document.getElementById('text')
let textColor = ''

const logger = function (event) {
  console.dir(event.target.value);

  return textColor = event.target.value// передача вводимого текста  

}

text.addEventListener('input', logger) // отрабатывает при вводе строки один или больше символов


btn.onclick = function () {
  square.style.backgroundColor = textColor
}


// В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "

const btnCircle = document.getElementById('e_btn')

btnCircle.onclick = function () {
  btnCircle.style = "display: none; "
}
// Повесить на input[type=range] обработчик события input и реализовать такой функционал:

//при каждом изменении положения ползунка значение input[type = range] необходимо заносить в свойства ширины и высоты кружка(который внутри квадрата)(height и width)(в процентах!!) 

const inputRange = document.querySelector('input[type = range]')
const circle = document.getElementById('circle');
const spanRange = document.getElementById('range-span');

range.value = circle.offsetWidth * 100 / square.offsetWidth;
spanRange.textContent = range.value + '%';

const inputEvent = function (event) {
  
  const percent = event.target.value + '%';
  circle.style.width = percent;
  circle.style.height = percent;
  
}
inputRange.addEventListener('input', inputEvent);
