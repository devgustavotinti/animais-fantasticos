let div = document.querySelector('div')
div = document.querySelector('[data-cor]')

div.dataset.height = 1000

delete div.dataset.width

console.log(div.dataset)