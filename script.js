let sizeOfGrid = 16
const container = document.querySelector('.container')
function createGrid (amtOfGrids){
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    container.appendChild(wrapper)
    for(let i = 0; i < amtOfGrids; i++){
       const gridRow = document.createElement('div')
       gridRow.classList.add('row')
       
       for(let j = 0; j < amtOfGrids; j++){
           const gridColumn = document.createElement('div')
           gridColumn.classList.add('grid-row')
           gridColumn.addEventListener('mouseenter',() =>{{
               gridColumn.style.backgroundColor = 'black'
            }})
            gridRow.appendChild(gridColumn)
        }
        wrapper.appendChild(gridRow)
   }
}
createGrid(sizeOfGrid)

const button = document.querySelector('.choice')
button.addEventListener('click', () =>{
    //container.remove()
    const choice = Number(prompt('number of squares per side for the new grid:', ''))
    if(choice <= 100){
        const removeW = document.querySelector('.wrapper')
        removeW.remove()
        createGrid(choice)     
    }

})



