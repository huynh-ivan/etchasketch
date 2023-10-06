//Add eventlistener for when the webpage loads
const rootElement = document.documentElement;
//rootElement.addEventListener('load', makeSquares())

const container = document.querySelector('.container') //select the container in javascript

const grid = document.createElement('div')//Create a grid div
grid.classList.add('grid');

function makeGrid(rows, columns) {
    for (let i = 1; i <= rows*columns; i++) {
        const box = document.createElement('div')//Create a box div
        box.id = i; 
        box.innerText = i;
        box.classList.add('box');
        grid.appendChild(box);
        container.appendChild(grid);

        box.addEventListener('mouseenter', enableHover)
        box.addEventListener('mouseleave', disableHover)

        function enableHover() {
            box.classList.add('hover');            
        };

        function disableHover() {
          box.classList.remove('hover');
        };
    };
};

makeGrid(16,16);



