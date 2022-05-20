const draggables = document.querySelectorAll('.draggable')
const dropZones = document.querySelectorAll('.dropzone')

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

dropZones.forEach((dropZone) => {
  dropZone.addEventListener('dragover', (event) => {
    event.preventDefault()
    const draggable = document.querySelector('.dragging')
    dropZone.appendChild(draggable)
  })
})
