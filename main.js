const more = document.getElementById('more')
const moreBtn = document.getElementById('moreBtn')
const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')

moreBtn.onclick = () => {
  more.classList.toggle('active')
}
menuBtn.onclick = () => {
  console.log('h')
  menu.classList.toggle('active')
}
