import { data } from '../../data/data.js'
import { mostrarMenu } from '../menu/menu.js'

export function mostrarContact(mostrarPagina) {
  const home = document.querySelector('#main')
  home.innerHTML = ''

  // generar fondo

  const fondo = document.createElement('div')
  fondo.classList.add('fondodepantalla4')

  // genero container para contact

  const contactContainer = document.createElement('div')
  contactContainer.classList.add('contactContainer')

  // Kremas descripcion y menu
  const titulo = document.createElement('h1')
  titulo.classList.add('titulo')
  titulo.textContent = data.name

  const descripcion = document.createElement('h2')
  descripcion.classList.add('descri')
  descripcion.textContent = data.description

  const menu = mostrarMenu('contact', mostrarPagina)

  // genero un div para estilo de contact

  const contactList = document.createElement('div')
  contactList.classList.add('contactList')

  // email
  const econt = document.createElement('div')
  econt.classList.add('econt')

  const email = document.createElement('p')
  email.classList.add('email')
  email.textContent = data['contact']['email']
  const elogo = document.createElement('img')
  elogo.classList.add('elogo')
  elogo.src = './assets/elogo.png'

  econt.appendChild(elogo)
  econt.appendChild(email)

  //inst
  const icont = document.createElement('div')
  icont.classList.add('icont')

  const instagram = document.createElement('p')
  instagram.classList.add('inst')
  instagram.textContent = data['contact']['instagram']
  const ilogo = document.createElement('img')
  ilogo.classList.add('ilogo')
  ilogo.src = './assets/instlogo.png'

  icont.appendChild(ilogo)
  icont.appendChild(instagram)

  elogo.addEventListener(
    'click',
    () => window.opendata['contact']['instagram'],
    '_blank'
  )

  // x
  const xcont = document.createElement('div')
  xcont.classList.add('xcont')

  const x = document.createElement('p')
  x.classList.add('x')
  x.textContent = data['contact']['twitter']
  const xlogo = document.createElement('img')
  xlogo.classList.add('xlogo')
  xlogo.src = './assets/xlogo.png'

  xcont.appendChild(xlogo)
  xcont.appendChild(x)

  xlogo.addEventListener(
    'click',
    () => window.opendata['contact']['instagram'],
    '_blank'
  )
  contactList.appendChild(icont)
  contactList.appendChild(econt)
  contactList.appendChild(xcont)

  home.appendChild(fondo)
  home.appendChild(titulo)
  home.append(descripcion)
  contactContainer.appendChild(contactList)
  home.appendChild(contactContainer)
  home.appendChild(menu)
}
