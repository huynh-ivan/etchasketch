
const defaultSize = 0;

function makeGrid(size) {
  const grid = document.querySelector('.grid')
  
  grid.classList.add('grid')
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

const btnResetGrid = document.getElementById('resetGrid');
btnResetGrid.addEventListener('click', resetGrid);

function resetGrid() { 
  let newSize = prompt("Enter a number", "0-100");
  let size = newSize;
  makeGrid(size);
};


makeGrid(defaultSize);