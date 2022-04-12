const dropDown = document.querySelector('#select')
const figure = document.querySelector('.square')
const buttonColorChange = document.querySelector('.color-selection__button')
const colorValue = document.querySelector('#color-value')

figure.style.backgroundColor = '#000';

dropDown.addEventListener('change', (selectedData)=>{
    valueSelectedColor = selectedData.target.value;
    figure.className = valueSelectedColor;
})


buttonColorChange.addEventListener('click', ()=>{
    let colorChange = colorValue.value;
    figure.style.backgroundColor = colorChange;
})
