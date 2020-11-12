// inputMask
const inputTel = document.querySelectorAll('input[type="tel"]');
const inputMaskTel = new Inputmask('+7 (999) 999-99-99');
inputMaskTel.mask(inputTel[0]);
inputMaskTel.mask(inputTel[1]);

// validate

new window.JustValidate('.modal__form', {
    rules: {
        fullName: { required: true, minLength: 3 },
        email: { required: true, email: true }
    },
    messages: {
        fullName: {
            minLength: 'Это поле должно содержать минимум :value символа',
            required: 'Поле обязательно для заполнения!'
        },

        email: 'Пожалуйста, введите действительный email'
    },
    colorWrong: '#fc557c',
    submitHandler: function (form, values, ajax) {

        let formData = new FormData(form);

        fetch("mail.php", {
            method: "POST",
            body: formData
        })
        .then(function(data) {
            btnSubmitFormModal[0].addEventListener('click', closeModal);
            form.reset();
            showModalSuccess();
            modal.classList.remove('show');
            modal.classList.add('hide');
        });
    },

});


new window.JustValidate('.modal__form--call', {
    rules: {
        fullName: { required: true, minLength: 3 },
        tel: { required: true },
        email: { required: false, email: false }
    },
    messages: {
        fullName: {
            minLength: 'Это поле должно содержать минимум :value символа',
            required: 'Поле обязательно для заполнения!'
        },
        tel: {
            required: 'Поле обязательно для заполнения!'
        }
    },
    colorWrong: '#fc557c',
    submitHandler: function (form, values, ajax) {

        let formData = new FormData(form);

        fetch("mail.php", {
            method: "POST",
            body: formData
        })
        .then(function(data) {
            btnSubmitFormModal[1].addEventListener('click', closeModal);
            form.reset();
            showModalSuccess ();
            modalCall.classList.remove('show');
            modalCall.classList.add('hide');
        });
    }
});
