const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const generateButton = document.getElementById('generate');
const strengthDisplay = document.getElementById('strength');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

export { passwordInput, lengthInput, lengthValue, generateButton, strengthDisplay, characters };
