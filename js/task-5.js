const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', event => {
  const text = event.target.value;
  if (text.trim() !== '') {
    output.textContent = text.trim();
  } else output.textContent = 'незнакомец';
});
