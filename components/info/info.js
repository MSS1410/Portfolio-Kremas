import { data } from '../../data/data.js'
import { mostrarMenu } from '../menu/menu.js'

export function mostrarInfo(mostrarPagina) {
  const home = document.querySelector('#main')
  home.innerHTML = ''

  // generar fondo
  const fondo = document.createElement('div')
  fondo.classList.add('fondodepantalla3')

  // genero container para info

  const infoContainer = document.createElement('div')
  infoContainer.classList.add('infoContainer')

  // Kremas descripcion y menu
  const titulo = document.createElement('h1')
  titulo.classList.add('titulo')
  titulo.textContent = data.name

  const descripcion = document.createElement('h2')
  descripcion.classList.add('descri')
  descripcion.textContent = data.description

  const menu = mostrarMenu('info', mostrarPagina)

  // genero un div para darle estilado a la info en columnas

  const infoList = document.createElement('div')
  infoList.classList.add('infoList')

  // lo que genero para cada parte del info de mi array

  // born

  const bornTxt = document.createElement('p')
  bornTxt.classList.add('born')
  bornTxt.textContent = data.info.born
  infoList.appendChild(bornTxt)
  // studies
  const studies = document.createElement('div')
  studies.classList.add('studies')

  data.info.studies.forEach((estudio) => {
    const studiestittle = document.createElement('h3')
    studiestittle.classList.add('studiestittle')
    studiestittle.textContent = estudio.tittle

    const studiesage = document.createElement('h4')
    studiesage.classList.add('studiesaged')
    studiesage.textContent = estudio.aged

    studies.appendChild(studiestittle)
    studies.appendChild(studiesage)
  })
  infoList.appendChild(studies)

  const entornos = document.createElement('div')
  entornos.classList.add('entornos')
  //experience
  data.info.experience.forEach((exp) => {
    const entorno = document.createElement('h3')
    entorno.classList.add('entorno')
    entorno.textContent = exp.entorno

    entornos.appendChild(entorno)
  })
  infoList.appendChild(entornos)

  // guardo los p en el div container
  home.appendChild(fondo)
  home.appendChild(titulo)
  home.appendChild(descripcion)

  infoContainer.appendChild(infoList)

  home.appendChild(infoContainer)

  home.appendChild(menu)

  // plasmo elementos en el DOM
}
