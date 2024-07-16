import { passwordInput, lengthInput, lengthValue, generateButton, strengthDisplay, characters } from './domElements.js';

const updateLengthValue = () => {
  const length = lengthInput.value;
  lengthValue.textContent = length;
  checkButtonStatus();
  updateStrength();
  generatePassword();
};

const checkButtonStatus = () => {
  generateButton.disabled = lengthInput.value <= 3;
};

const updateStrength = () => {
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
};

const generatePassword = () => {
  const length = parseInt(lengthInput.value, 10);
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  passwordInput.value = password;
};

export { updateLengthValue, generatePassword };
