const navigator = document.querySelector('.nav-bar .navigator i'),
navigator2 = document.querySelector('.nav-bar .navigator i')
navBar = document.querySelector('.nav-bar ul');
header = document.querySelector('header');


navigator.onclick = () => {
    navBar.classList.toggle('active');
    navigator2.classList.toggle('active')
}