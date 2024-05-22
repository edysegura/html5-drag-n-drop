import { Sortable } from 'https://cdn.jsdelivr.net/npm/@shopify/draggable@1.1.3/+esm'

const container = document.querySelector('[data-sortable]')
const sortable = new Sortable(container, {
  draggable: 'li',
  mirror: {
    constrainDimensions: true,
  },
})
