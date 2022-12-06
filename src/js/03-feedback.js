import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');


    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
        email.value = data.email;
        message.value = data.message;
    };

const throtteledForm = throttle(() => {
    
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


