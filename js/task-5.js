const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', event => {
  event.target.value.trim() != ''
    ? (output.textContent = event.target.value.trim())
    : (output.textContent = 'незнакомец');
});
