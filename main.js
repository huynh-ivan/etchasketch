
const defaultSize = 0;

const gridContainer = document.querySelector('.gridContainer');

const grid = document.createElement('div');
grid.classList.add('grid')
grid.id =('current')

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
    gridContainer.appendChild(grid);
  };
};


function deleteGrid() {
  let grid = document.getElementById('current')

  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild)
  };
};


function resetGrid() { 
  //deleteGrid()
  let newSize = prompt("Enter a number", "0-100");
  let size = newSize;
  makeGrid(size);
};


const btnDeleteGrid = document.getElementById('deleteGrid');
btnDeleteGrid.addEventListener('click', deleteGrid);

const btnResetGrid = document.getElementById('resetGrid');
btnResetGrid.addEventListener('click', resetGrid);


