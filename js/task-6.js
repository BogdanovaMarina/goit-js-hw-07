const inputValid = document.getElementById('validation-input');
const inputLength = +inputValid.attributes['data-length'].value;

function verification() {
  const currentInput = inputValid.value.length;

  if (currentInput === inputLength) {
    inputValid.classList.add('valid');
    inputValid.classList.remove('invalid');
  } else {
    inputValid.classList.add('invalid');
    inputValid.classList.remove('valid');
  }
}
inputValid.addEventListener('blur', verification);
