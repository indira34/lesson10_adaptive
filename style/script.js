 const burger = document.querySelector('#burger')
 const burgerMenu = document.querySelector('#burger-menu')
 const closeBtn = document.querySelector('#close')

 burger.addEventListener("click", () >{
    burgerMenu.classList.add('show')
 })

 .closeBtn.addEventListener("click", () >{
    burgerMenu.classList.remove("show")
 })

 