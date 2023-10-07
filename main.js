
function makeGrid(rows, columns) {
    //select the container div in javascript
    const container = document.querySelector('.container')
    container.style.height = "960px";
    container.style.width = "960px";
    container.style.display = "grid";
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    container.style.position = 'relative';
    container.style.margin = "64px";


    //use a loop to create boxes based on the # of rows * columns
    for (let i = 1; i <= rows*columns; i++) {
        
        //Create a box div
        const box = document.createElement('div')
        box.id = i; 
        box.textContent = i;
        box.style.display = "flex";
        box.style.height = `calc(100% / columns)`
        box.style.width = `calc(100% / rows)`
        box.style.backgroundColor = 'darkgrey'
        box.style.justifyContent = 'center';
        box.style.alignItems = 'center';
        box.style.textAlign = 'center';
        box.style.padding ='4px';

        //Add Eventlisteners
        box.addEventListener('mouseenter', enableHover);
        box.addEventListener('mouseleave', disableHover);

        //Write function to change background color of a box 
        function enableHover() {
            box.classList.add('hover');            
        };

        //Write function to remove the background color from a box
        function disableHover() {
           box.classList.remove('hover');
        };

        //Append Box to Container
        container.appendChild(box);
    };
};

makeGrid(16,16);