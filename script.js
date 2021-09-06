const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorIcon = document.querySelector('.error-icon');
const small = document.querySelector('small');

// Checks if email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Shows error if email is not valid
function showError() {
  errorIcon.classList.remove('hidden');
  small.classList.remove('hidden');
}

// Shows success if email is valid
function showSuccess() {
  email.classList.add('success');
}

// Event listener
form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value === '' || !isValidEmail(email.value)) {
    small.textContent = 'Please provide a valid email';
    showError();
  } else {
    showSuccess();
    email.value = '';
  }
});
