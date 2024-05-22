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

sortable.on('sortable:stop', ({ data }) => {
  console.log('sortable:stop')
  console.log(data)
})
