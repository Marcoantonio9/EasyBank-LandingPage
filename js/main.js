let menu = document.querySelector('.menu')
let btnMenuOpen = document.querySelector('.btnMenu_open')
let btnMenuClose = document.querySelector('.btnMenu_close')

btnMenuOpen.addEventListener('click', () => {
    menu.classList.toggle('menu_open') 
})

btnMenuClose.addEventListener('click', () => {
    menu.classList.toggle('menu_open')
})
