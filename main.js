
const ul=document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello';
ul.firstElementChild.style.background='green';
ul.lastElementChild.style.background='yellow';
 


const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });
  