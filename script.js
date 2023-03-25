const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')
const loginbtn = document.querySelector('.btnLogo-popup')
const loginbtn1 = document.querySelector('.btnLogo-popup1')
const iconClose = document.querySelector('.icon-close')
const togglebtn = document.querySelector('.toggle-btn');
const dropDown= document.querySelector('.drop-down');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

loginbtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
loginbtn1.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');

});
togglebtn.addEventListener('click',()=>{
    console.log("loda lassan");
    dropDown.classList.toggle('inactive');

})