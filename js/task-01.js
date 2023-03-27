
const categories = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${categories.length}`);

console.log("");

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryCount = category.querySelectorAll('li').length;

    console.log(`Category:  ${categoryTitle} `);
    console.log(`Elements:  ${categoryCount}`);
    console.log("");
   });
