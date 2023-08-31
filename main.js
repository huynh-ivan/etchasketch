//Add eventlistener for when the webpage loads
const rootElement = document.documentElement;
//rootElement.addEventListener('load', makeSquares())




const container = document.querySelector('.container') //select the container in javascript

const grid = document.createElement('div')//Create a grid div

function makeGrid(rows, columns) {
    for (let i = 0; i <= rows*columns; i++) {
        const box = document.createElement('div')//Create a box div
        box.id = i; 
        box.classList.add('box');
        grid.appendChild(box);
        container.appendChild(grid);
    };
};

makeGrid(16,16);






/*
Questions:
- how do I get the window to display 16 squares in a grid on load?
    - probably adding an eventlistener to the `body` tag listening for the load event
    - I suspect I will need to call a function to draw exactly 16 squares
    - I remember there being something on mdn about drawing circles. Maybe that's a clue?
- for all the squares, it feels like they need to have classes
    - this is so I can toggle the classes based on eventlisteners
    - there will need to be some sort of start class (regular color) and then the change class (the color to change to)
    - on mouseenter, the function should toggle the change class on AND the start class off
    - on mouseleave, the function should toggle the change class off AND the start class on
- what is the best way to draw 16 squares?
    - do I loop through something somehow?
    - how would I loop through an append()



 */


//write a function to make squares
/*function makeColumn() {
    const column = document.createDocumentFragment();
    for (let i = 1; i < 17; i++) {
        const square = document.createElement('div'); //Create the square element
        square.id = 's' + i; //Declare the square element's ID as S + the counter variable
        square.classList.add('square'); //add a class via class list
        column.appendChild(square); //append the squares into the DocumentFragment
    };

    columnContainer.appendChild(column);
    container.appendChild(columnContainer);
};

makeColumn();
*/