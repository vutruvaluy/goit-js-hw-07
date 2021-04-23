
 const titleEl = document.querySelectorAll('.item');
console.log(`В списке ${titleEl.length} категории.`);
 
titleEl.forEach(category => {
  console.log(`Категория: ${category.childNodes[1].textContent}`);
  console.log(`Количество элементов: ${category.childNodes[3].children.length}`);
});
