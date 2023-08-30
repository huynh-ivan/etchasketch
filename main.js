//Add eventlistener for when the webpage loads
const rootElement = document.documentElement;
//site.addEventListener('load', drawSquares())


//represent the container in javascript
const container = document.querySelector('.container');

//represent a square div in javascript
const square1 = document.createElement('div');
square1.classList.add('square');

const square2 = document.createElement('div');
square2.classList.add('square');

const square3 = document.createElement('div');
square3.classList.add('square');

container.appendChild(square1);
container.appendChild(square2);
container.appendChild(square3);
//write a funciton to draw 1 square


//add eventListener for mouseenter event


//add eventListener for the mouseleave event


//add eventlistener for the mouseover event

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