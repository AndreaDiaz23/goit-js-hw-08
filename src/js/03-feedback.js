import throttle from "lodash.throttle"


const formInfo = document.querySelector('.feedback-form');
const emailInfo = formInfo.querySelector('input[name="email"]');
const messageInfo = formInfo.querySelector('textarea[name="message"]');

formInfo.addEventListener('input', throttle(textForm, 500));

window.addEventListener('load', () => {
    const savedInfo =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

    emailInfo.value = savedInfo.email || '';
    messageInfo.value = savedInfo.message || '';
});

formInfo.addEventListener('submit', event =>{
    event.preventDefault();

    const formulario = {
        email: emailInfo.value,
        message: messageInfo.value,
    };
    console.log(formulario);

    localStorage.removeItem('feedback-form-state');
    emailInfo.value = '';
    messageInfo.value='';
});

function textForm() {
    const formulario = {
        email: emailInfo.value,
        message: messageInfo.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formulario));

}