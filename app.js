const navLi = document.querySelector('.nav-li')
const ham = document.querySelector('#ham')

ham.addEventListener('click', show)


function show() {
    // console.log('hi')
    navLi.classList.toggle('nav-li')
}