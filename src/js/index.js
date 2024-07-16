// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

import { updateLengthValue, generatePassword } from './passwordUtils.js';
import { lengthInput, generateButton } from './domElements.js';

document.addEventListener('DOMContentLoaded', () => {
  lengthInput.addEventListener('input', updateLengthValue);
  generateButton.addEventListener('click', generatePassword);

  updateLengthValue();
});
