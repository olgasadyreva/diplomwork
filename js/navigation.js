document.body.classList.remove('no-js');

//Создание переменных
const headerTopElement = document.querySelector('.js-header__top');
//Элементы меню
const menuListHeaderElement = document.querySelector('.js-header__nav');
const menuListFooterElement = document.querySelector('.js-footer__nav');
const btnBurgerElement = document.querySelector('.js-header__button');
const navLinksElement= document.querySelectorAll('.js-nav__link');
const navLinksArray = Array.from(navLinksElement); //преобразуем в массив

//Секции
const sectionSkillsElement = document.getElementById('js-skills');
const sectionPortfolioElement = document.getElementById('js-portfolio');
const sectionPricesElement = document.getElementById('js-prices');


//События

//Навешиваем событие на кнопку разворачивая меню
btnBurgerElement.addEventListener('click', onBtnShowMenuElemClick);
//Навешиваем события для закрытия меню при нажатии на esc
document.addEventListener('keydown', onBodyClickForCloseMenu);

//Навешиваем событие на меню  хэдере и футере
menuListHeaderElement.addEventListener('click', handleLinkClick);
menuListFooterElement.addEventListener('click', handleLinkClick);


//Функции

//Функция показа/скрытия меню
function onBtnShowMenuElemClick() {
    //Навешиваем события для закрытия меню при клике вне его
    document.body.addEventListener('click', onBodyClickForCloseMenu);

    const target = event.target;
    const valAttrExpanded = target.getAttribute('aria-expanded');

    headerTopElement.classList.toggle('menu-open');

    if (valAttrExpanded === 'true') {
        btnBurgerElement.setAttribute('aria-label', 'Показать меню');
        btnBurgerElement.setAttribute ('aria-expanded', 'false');
    }

    if (valAttrExpanded === 'false') {
        btnBurgerElement.setAttribute('aria-label', 'Скрыть меню');
        btnBurgerElement.setAttribute ('aria-expanded', 'true');
    }
}

// Функция для закрытия меню при клике вне его  и нажатии esc
function onBodyClickForCloseMenu() {
    if(event.type === 'keydown' && event.keyCode === 27) {
        btnBurgerElement.closest('.js-header__top').classList.remove('nav-open');
        btnBurgerElement.setAttribute('aria-label', 'Показать меню');
        btnBurgerElement.setAttribute ('aria-expanded', 'false');

        document.body.removeEventListener('click', onBodyClickForCloseMenu);
            }
    else if (event.type === 'click' && event.target !== menuListHeaderElement){
        const valAttrExpanded = btnBurgerElement.getAttribute('aria-expanded');

        headerTopElement.classList.toggle('nav-open');

        if (!headerTopElement.classList.contains('nav-open')) {
            if (valAttrExpanded === 'true') {
                btnBurgerElement.setAttribute('aria-label', 'Показать меню');
                btnBurgerElement.setAttribute ('aria-expanded', 'false');

                document.body.removeEventListener('click', onBodyClickForCloseMenu);
            }

            if (valAttrExpanded === 'false') {
                btnBurgerElement.setAttribute('aria-label', 'Скрыть меню');
                btnBurgerElement.setAttribute ('aria-expanded', 'true');
                document.body.removeEventListener('click', onBodyClickForCloseMenu);
                console.log('Скрыть меню');
            }
        }
    }
}

//Функция навигации и скроллинга

function handleLinkClick(e) {
    e.preventDefault();

    let coordsSection;

    if(e.target.textContent ==='Услуги'){
        coordsSection = sectionSkillsElement.offsetTop;
        e.target.classList.add('nav__link--active');
    }
    else if (e.target.textContent ==='Портфолио') {
        coordsSection = sectionPortfolioElement.offsetTop;
        e.target.classList.add('nav__link--active');
    }

    else if (e.target.textContent ==='Стоимость') {
        coordsSection = sectionPricesElement.offsetTop;
        e.target.classList.add('nav__link--active');
    }

    const scrollOptions = {
    top: coordsSection,
    behavior: 'smooth'
    }

    window.scrollTo(scrollOptions);

    navLinksArray.forEach(function(v, i, arr) {
        if(arr[i] !== e.target) {
            arr[i].classList.remove('nav__link--active');
        }
    });
}
