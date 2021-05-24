// track element
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const container = document.querySelector('.container');
const content = document.querySelector('.content');

// open functionality
openBtn.addEventListener('click',event=>container.classList.add('show-nav'));

// close functionlity
closeBtn.addEventListener('click',event=>container.classList.remove('show-nav'));