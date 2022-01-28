import 'babel-polyfill';

const showSuccess = (message) => {
  const msgContainer = document.querySelector('#scores-form span');
  msgContainer.textContent = `${message}`;
  msgContainer.classList.remove('hidden');
  setTimeout(() => {
    msgContainer.classList.add('hidden');
  }, 2000);
};

export default showSuccess;