var _ = require('lodash');
const feedbackForm = document.querySelector('.feedback-form');

// let populateForm()
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
        email.value = data.email;
        message.value = data.message;
    };

const throtteledForm = _.throttle(() => {
    
    const { email, message } = feedbackForm.elements;
    const back = { email: email.value, message: message.value };
    console.log(back);
    
    localStorage.setItem("feedback-form-state", JSON.stringify(back));
}, 500);
feedbackForm.addEventListener("input", throtteledForm);



feedbackForm.addEventListener('submit', event => {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.preventDefault();
    event.currentTarget.reset();
    
    localStorage.removeItem('feedback-form-state');
});

// import throttle from 'lodash';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('submit', onSubmitForm);

// const formData = {};

// function onFormData(e) {
//   formData[e.target.name] = e.target.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//     console.log(e.target.value);
// }

// function onSubmitForm(e) {
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// (function dataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// });
