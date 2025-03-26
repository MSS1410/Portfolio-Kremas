// export function mostrarMenu(paginaActual, mostrarPagina) {
//   // pagina actual seran home projects info o contact
//   // usaremos esto porque quiero que el item que se encuentre en la pagina actual tenga una caracteristica diferente, asi luego
//   // con unn condicional miraremos que el item seleccionado sea el mismo que uno de los items del menu
//   // por otra parte mostrarPagina, manejo la funcion de mostrarpagina relacionado directamente con el evento click
//   const menu = document.createElement('ul')
//   menu.classList.add('menu')

//   // genero un array con los nombres de las paginas y los paso a un for each

//   const paginas = ['Home', 'Projects', 'Info', 'Contact']
//   paginas.forEach((pagina) => {
//     const item = document.createElement('li')
//     item.classList.add('itemlista')
//     // añado valor al item de la lista
//     item.textContent = pagina
//     // genero el evento de click enlazado con la funcion mostrar pagina, como en la funcion tengo los nombres en minuscula tengo que to lowercase
//     item.addEventListener('click', () => mostrarPagina(pagina.toLowerCase()))
//     // quiero añadir clase caracteristica item select
//     if (pagina.toLowerCase() === paginaActual) {
//       item.classList.add('select')
//     }
//     menu.appendChild(item)
//   })
//   return menu
// }

// menu.js
// Se modifica para envolver el <ul> en un contenedor .menu-container

export function mostrarMenu(paginaActual, mostrarPagina) {
  // Creamos un contenedor para el menú (posicionado arriba, horizontal)
  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu-container')

  const menu = document.createElement('ul')
  menu.classList.add('menu')

  const paginas = ['Home', 'Projects', 'Info', 'Contact']
  paginas.forEach((pagina) => {
    const item = document.createElement('li')
    item.classList.add('itemlista')
    item.textContent = pagina
    item.addEventListener('click', () => mostrarPagina(pagina.toLowerCase()))

    if (pagina.toLowerCase() === paginaActual) {
      item.classList.add('select')
    }
    menu.appendChild(item)
  })

  menuContainer.appendChild(menu)
  return menuContainer
}

// Ejemplo de Home (por si lo usas en este mismo archivo):
export function mostrarHome(mostrarPagina) {
  const home = document.querySelector('#main')
  home.innerHTML = ''

  const titulo = document.createElement('h1')
  titulo.classList.add('titulo')
  titulo.textContent = 'KREMAS'

  const frase = document.createElement('h2')
  frase.classList.add('frase')
  frase.textContent = 'Designer and Developer Portfolio'

  home.appendChild(titulo)
  home.appendChild(frase)

  // Inyectamos el menú horizontal arriba
  const menu = mostrarMenu('home', mostrarPagina)
  home.appendChild(menu)
}
