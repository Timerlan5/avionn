const burger = () => {
    const btn = document.querySelector('header div div.burger svg#burg')
    const da = document.querySelector('.header')
    const close = document.querySelector('.header nav svg')
    btn.addEventListener('click', () => {
        da.style.display = 'block'
        console.log(btn)
    })
    close.addEventListener('click', () => {
        da.style.display = 'none'
    })
}

burger()
