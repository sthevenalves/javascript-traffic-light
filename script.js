const buttons = document.querySelector('#buttons');
const image = document.querySelector('#img');
let colorIndex = 0;

const trafficLight = (event) =>{
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const turnOn = {
    'red': () => image.src = './assets/vermelho.png',
    'yellow': () => image.src = './assets/amarelo.png',
    'green': () => image.src = './assets/verde.png',
    'automatic': () => setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);