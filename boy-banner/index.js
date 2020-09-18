const burger = document.querySelector('.burger')
const navmenu = document.querySelector('.nav-menu')
const navMenuItem = document.querySelectorAll('.nav-menu li')
burger.addEventListener('click',() => {
  burger.classList.toggle('active')
  navmenu.classList.toggle('open')
  navMenuItem.forEach((item, index)=>{
    if (item.style.animation) {
      item.style.animation=""
    } else {
      item.style.animation=`.3s ease-in slideIn forwards ${.1*index + .3 }s`
    }
  })
})
