
//select the container div in javascript
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




makeGrid(23);




