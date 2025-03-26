import './style.css'
// menu
import './components/menu/menu.css'
import { mostrarMenu } from './components/menu/menu.js'
//projects
import './components/projects/project.css'
import { mostrarProjects } from './components/projects/project.js'
//info
import './components/info/info.js'
import { mostrarInfo } from './components/info/info.js'
//contact
import './components/contact/contact.js'
import { mostrarContact } from './components/contact/contact.js'

import { data } from './data/data.js'

const home = document.querySelector('#main')
// funcion para camviar de pag
function mostrarPagina(pagina) {
  console.log('Cambiando a la página:', pagina)

  // actualizo pagina actual,

  //limpio y cargo seccion
  home.innerHTML = ''
  if (pagina === 'projects') {
    console.log('Cargando página de proyectos')
    mostrarProjects(mostrarPagina)
  } else if (pagina === 'info') {
    mostrarInfo(mostrarPagina)
  } else if (pagina === 'home') {
    crearHome(mostrarPagina)
  } else if (pagina === 'contact') {
    mostrarContact(mostrarPagina)
  }
}
// funcion para el home page

function crearHome() {
  // tengo problemas cuando recargo el home,
  home.innerHTML = ''
  // genero el fondo
  // para poder añadirle efecto tengo que darle la imagen directamente desde el css
  // const backgroundImg = document.createElement('img')
  // backgroundImg.src = '/assets/fpor.jpg'
  // backgroundImg.classList.add('fondopantalla')
  // genero el titulo

  // necesito generar un div que configurare como fondo para las distintas pags

  const fondo = document.createElement('div')
  fondo.classList.add('fondopantalla')
  const titulo = document.createElement('h1')
  titulo.classList.add('titulo')
  titulo.textContent = data.name

  // genero espacio para descripcion

  const descripcion = document.createElement('h2')
  descripcion.classList.add('descri')
  descripcion.textContent = data.description

  // apartado par amenu
  // voy a paslmar el resultado de la funcion crear menu que importo, con home como paginaActual y entonces ejecutar mostrarPagina que me activa el click

  // elemento fgrase de la derecha

  const frase = document.createElement('p')

  frase.textContent = ' Ignore Emotions, Create Thoughts. '
  frase.classList.add('frase')

  // plasmo lo generado en el DOM

  // home.appendChild(backgroundImg)
  home.appendChild(fondo)
  home.appendChild(titulo)
  home.appendChild(descripcion)
  home.appendChild(mostrarMenu('home', mostrarPagina))

  home.appendChild(frase)

  // creo la funcion que me mueve de pagina a pagina
}

crearHome()
