const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', () => {
  textRef.setAttribute('style', `font-size: ${inputRef.value}px`);
});
