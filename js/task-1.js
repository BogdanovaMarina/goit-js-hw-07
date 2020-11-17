const categories = document.querySelectorAll('li.item');
console.log(`В списке ${categories.length} категории`);

const list = document.querySelectorAll('h2');
list.forEach(elem => {
  console.log(`Категория: ${elem.textContent}`);
  console.log(
    `Количество элементов: ${elem.parentNode.querySelectorAll('li').length}`,
  );
});
