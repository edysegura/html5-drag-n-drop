const draggables = document.querySelectorAll('[draggable=true]')
const dropZone = document.querySelector('.dropzone')

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault()
  const afterElement = getDragAfterElement(dropZone, event.clientY)
  const draggable = document.querySelector('.dragging')
  if (!afterElement) {
    dropZone.appendChild(draggable)
  } else {
    dropZone.insertBefore(draggable, afterElement)
  }
})

function getDragAfterElement(container, mousePositionY) {
  const draggableElements = [
    ...container.querySelectorAll('[draggable=true]:not(.dragging)'),
  ]

  return draggableElements.reduce(
    (closest, element) => {
      const box = element.getBoundingClientRect()
      const offset = mousePositionY - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset, element }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element
}

dropZone.addEventListener('dragend', () => {
  const draggables = [...document.querySelectorAll('[draggable=true]')]
  const pre = document.querySelector('pre')
  const dataStructure = draggables.map((element, index) => ({
    order: index,
    name: element.textContent,
  }))
  pre.textContent = JSON.stringify(dataStructure, null, 2)
})
