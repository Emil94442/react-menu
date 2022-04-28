const BurgerMenu = document.querySelector('.burger-menu')


const HeaderMenu = document.querySelector('.header-menu')


const BodyNewClass = document.querySelector('body')

let HelpBurgerMenu = false
BurgerMenu.addEventListener('click' , () => {
    if (HelpBurgerMenu === false) {
        HelpBurgerMenu = true
    } else {
        HelpBurgerMenu = false
    }
})






BurgerMenu.addEventListener('click', () => {
    if (HelpBurgerMenu === true) {
        HeaderMenu.classList.add('this')
        BurgerMenu.classList.add('this')
        BodyNewClass.classList.add('this')
    } else if (HelpBurgerMenu === false) {
        HeaderMenu.classList.remove('this')
        BurgerMenu.classList.remove('this')
        BodyNewClass.classList.remove('this')
    }
})


const хзДаже = {
    "Кайрат": "Я также могу",
    "Шамен": "Ты пойдёшь завтра в зал?"
}

let Шамен = хзДаже['Шамен']

let AnswerByShamen = undefined

console.log(Шамен)
