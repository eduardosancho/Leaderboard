import 'babel-polyfill';
import { set } from 'lodash';

const showSuccess = (message) => {
    const msgContainer = document.querySelector('#scores-form span');
    msgContainer.textContent = `${message}`;
    msgContainer.classList.remove('hidden');
    setTimeout(function () {
        msgContainer.classList.add('hidden');
    }, 2000);
}

export default showSuccess;