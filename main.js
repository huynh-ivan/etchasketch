
const defaultSize = 16;

const grid = document.querySelector('.grid')
grid.classList.add('grid')

function makeGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.id = i;
    gridItem.textContent = i;
    gridItem.classList.add('gridItem');
        
    gridItem.addEventListener('mouseenter', toggleHover);
    gridItem.addEventListener('mouseleave', toggleHover);
    
    function toggleHover() {
      gridItem.classList.toggle('hover');
    };

    grid.appendChild(gridItem);
    };
};

document.addEventListener('load', makeGrid(defaultSize)); //initialize the first grid

//select the Reset Grid Button using JS

//when the user clicks the Reset Grid button, prompt the user for a new grid value

//Use the return of the prompt as the new size for the grid

//generate the new grid

//swap the initial grid with the new grid?
