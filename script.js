const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.error');
const errorIcon = document.querySelector('.error-icon');

// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

// Show error
function showError() {
  errorIcon.classList.remove('hidden');
  if (email.validity.valueMissing) {
    // If the field is empty, display:
    emailError.textContent = 'Please provide an email';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain a valid email address, display:
    emailError.textContent = 'Please provide a valid email';
  }

  // Set the styling:
  emailError.className = 'error active';
}

// EVENT LISTENERS:

// Input field
email.addEventListener('input', event => {
  // Check if form field is valid
  if (email.validity.valid) {
    // If there's an error message visible and if the field is valid, remove the error message:
    emailError.textContent = ''; // resets the content of the message
    emailError.className = 'error'; //resets the visual state of the message
    errorIcon.className = 'hidden';
  } else {
    // If there's still an error, show the correct error
    showError();
  }
});

// Form
form.addEventListener('submit', event => {
  // If the email field is valid, let the form submi
  if (!email.validity.valid) {
    // If it isn't, display an appropriate error message
    showError();
    // Then prevent the form from being sent by cancelling the event
    event.preventDefault();
  }
});
