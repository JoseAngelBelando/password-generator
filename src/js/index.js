// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const lengthInput = document.getElementById('length');
  const lengthValue = document.getElementById('lengthValue');
  const generateButton = document.getElementById('generate');
  const strengthDisplay = document.getElementById('strength');

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

  function updateLengthValue() {
    const length = lengthInput.value;
    lengthValue.textContent = length;
    checkButtonStatus();
    updateStrength();
    generatePassword();
  }

  function checkButtonStatus() {
    generateButton.disabled = lengthInput.value <= 3;
  }

  function updateStrength() {
    const length = parseInt(lengthInput.value, 10);
    if (length <= 5) {
      strengthDisplay.textContent = 'TOO SHORT';
    } else if (length <= 9) {
      strengthDisplay.textContent = 'WEAK';
    } else if (length <= 14) {
      strengthDisplay.textContent = 'MEDIUM';
    } else {
      strengthDisplay.textContent = 'STRONG';
    }
  }

  function generatePassword() {
    const length = parseInt(lengthInput.value, 10);
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    passwordInput.value = password;
  }

  lengthInput.addEventListener('input', updateLengthValue);
  generateButton.addEventListener('click', generatePassword);

  updateLengthValue();
});
