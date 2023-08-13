
let categories = document.querySelectorAll('#categories .item');


console.log(`Number of categories: ${categories.length}`);


categories.forEach(category => {
    
    let title = category.querySelector('h2').textContent;
    
    
    let elements = category.querySelectorAll('ul > li').length;


    console.log(`\nCategory: ${title}\nElements: ${elements}`);
});