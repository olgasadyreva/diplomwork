//Модальные окна
const modals = document.querySelectorAll('.modal');
const modalSuccess = document.querySelector('.js-modal-success');
const modalOverlay = document.querySelector('.js-modal-overlay');
const modalCall = document.querySelector('.js-modal-call');

// Коллекция кнопок закрытия модальных окон
const btnsClose = document.querySelectorAll('.js-btn-closed');
const btnsCloseModal = Array.from(btnsClose); //массив из них

// Коллекция кнопок отправки форм в модальных оконах
const btnSubmitFormModal = document.querySelectorAll('.js-btn-submit');
const btnsSubmitModal = Array.from(btnSubmitFormModal);

// Коллекция кнопок открытия модальных окон
const btns = document.querySelectorAll('.js-btn');
const btnsOpenModal = Array.from(btns);

//Навешиваем события на кнопки открытия и закрытия модальных окон
btnsOpenModal.forEach(function(item, i, arr){
    item.addEventListener('click', showModal);
});
btnsCloseModal.forEach(function(item, i, arr){
   item.addEventListener('click', closeModal);
});

//Функция для открытия модального окна
function showModal () {
    //Навешиваем событие для закрытия модального окна при клике вне его и нажатии ecs
    document.body.addEventListener('click', onBodyClickForCloseModal);
    document.addEventListener('keydown', onBodyClickForCloseModal);
    let currentModal = ''; //текущее модальное окно

    const target = event.target;

    //Определяем, какое из модальных окон нужно открыть
    if(target.classList.contains('js-btn-call')) {
        currentModal = modals[1];
    }
    else {
        currentModal = modals[0];
    }

    //Показываем окно и меняем атрибуты
    currentModal.setAttribute('aria-hidden', 'false');
    currentModal.classList.remove('hide');
    currentModal.classList.add('show');
    //Находим первый инпут и ставим фокус
    let inputNameElement = currentModal.children[3].elements.fullName;
    inputNameElement.focus();
    
    modalOverlay.classList.remove('hide');
    modalOverlay.classList.add('show');

    document.body.classList.add('modal-active');
}

// Функция для закрытия модального окона при клике вне его и нажатии esc
function onBodyClickForCloseModal() {
    const target = event.target;

    if(target === modalOverlay || event.keyCode === 27) {
        let currentOpenModal = '';

        for(i=0; i< modals.length; i++) {
            if (modals[i].classList.contains('show')) {
                currentOpenModal = modals[i];
            }
        }

        currentOpenModal.setAttribute('aria-hidden', 'true');
        currentOpenModal.classList.remove('show');
        currentOpenModal.classList.add('hide');
        modalOverlay.classList.remove('show');
        modalOverlay.classList.add('hide');

        document.body.classList.remove('modal-active');
    }
}

// Функция для закрытия модального окона по нажатию на крестик
function closeModal () {
    const targetParent = event.target.closest('.modal');
    targetParent.setAttribute('aria-hidden', 'true');
    targetParent.classList.remove('show');
    targetParent.classList.add('hide');
    modalSuccess.setAttribute('aria-hidden', 'true');
    modalSuccess.classList.remove('show');
    modalSuccess.classList.add('hide');
    modalOverlay.classList.remove('show');
    modalOverlay.classList.add('hide');
    //Сброс полей формы
    if(targetParent!=='modalSuccess') {
        document.forms.request.reset();
    }

    document.body.classList.remove('modal-active');
}

// Функция для показа модального окона при успешной отправке формы
function showModalSuccess () {
    modalSuccess.setAttribute('aria-hidden', 'false');
    modalSuccess.classList.add('show');
    modalSuccess.classList.remove('hide');
    modalOverlay.classList.remove('hide');
    modalOverlay.classList.add('show');
}