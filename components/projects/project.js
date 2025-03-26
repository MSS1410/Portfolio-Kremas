import { data } from '../../data/data.js'
import { mostrarMenu } from '../menu/menu.js'
export function mostrarProjects(mostrarPagina) {
  // como que genero las distintas secciones todas dentro del mismo main, tengo que limpiar el home para poder aplicar el projects
  const home = document.querySelector('#main')
  home.innerHTML = ''

  // genero fondo
  const fondo = document.createElement('div')
  fondo.classList.add('fondopantalla2')

  // genero container para proyectos
  const projectsContainer = document.createElement('div')
  projectsContainer.classList.add('projectsContainer')

  // arrastro titulo y descri de home
  const titulo = document.createElement('h1')
  titulo.classList.add('titulo')
  titulo.textContent = data.name

  const descripcion = document.createElement('h2')
  descripcion.classList.add('descri')
  descripcion.textContent = data.description

  // genero un div para darle estilo al listtado en columnas

  const projectsList = document.createElement('div')
  projectsList.classList.add('projectsList')

  // crear contenido para los elementos del array de mi objeto data
  data.projects.forEach((project) => {
    // generardiv para guardar items
    const projectItem = document.createElement('div')
    projectItem.classList.add('projectItem')
    // una vez tengo generados los items les añado la informacion

    // genero un div con clase para poder poner titulo y descri en una linea
    const projectInfo = document.createElement('div')
    projectInfo.classList.add('projectInfo')

    // descripcion
    const descriP = document.createElement('p')
    descriP.classList.add('descriProyecto')
    descriP.textContent = project.description

    // titulo
    const tituloProyecto = document.createElement('h2')
    tituloProyecto.classList.add('tituloProyecto')
    // CUANDO accedo a la informaciond el array, tengo que tener en cuenta que projects es global y project es el individual
    tituloProyecto.textContent = project.title

    // link y creo un simbolo para enlace
    const projectLink = document.createElement('span')
    projectLink.classList.add('projectLink')
    projectLink.innerHTML = '↗'
    projectLink.style.cursor = 'pointer'

    // añado click al nombre del evento
    projectLink.addEventListener('click', () => {
      window.open(project.link, '_blank') // Abrir el enlace en una nueva ventana o pestaña
    })
    //plasmo los elementos en el fkn dom
    projectInfo.appendChild(tituloProyecto)
    projectInfo.appendChild(descriP)
    projectInfo.appendChild(projectLink)
    projectItem.appendChild(projectInfo)
    projectsList.appendChild(projectItem)
  })
  // añadir el menu al section generado
  const menu = mostrarMenu('projects', mostrarPagina)
  // añadir la seccion proyectos al contenido principal
  home.appendChild(fondo)
  home.appendChild(titulo)
  home.appendChild(descripcion)
  home.appendChild(menu)

  home.appendChild(projectsList)
}
