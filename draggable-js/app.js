// Draggable documentation: https://shopify.github.io/draggable/docs/
import { Sortable } from 'https://cdn.jsdelivr.net/npm/@shopify/draggable@1.1.3/+esm'

const container = document.querySelector('[data-sortable]')
const sortable = new Sortable(container, {
  draggable: 'li',
  mirror: {
    constrainDimensions: true,
  },
})

sortable.on('sortable:start', () => {
  console.log('sortable:start')
})

sortable.on('sortable:sorted', () => {
  console.log('sortable:sorted')
})

sortable.on('sortable:stop', (sortableEvent) => {
  console.log('sortable:stop')
  console.log(sortableEvent)
  // this is a workaround to update the order after the DOM has been updated
  // and avoid duplicated items in the data structure
  setTimeout(() => {
    updateOrder(container)
  })
})

function updateOrder(container) {
  const items = [...container.querySelectorAll('li')]
  const pre = document.querySelector('pre')
  const dataStructure = items.map((element, index) => ({
    order: index,
    name: element.textContent,
  }))
  pre.textContent = JSON.stringify(dataStructure, null, 2)
}
