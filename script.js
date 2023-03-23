const wrapper = document.querySelector(".wrapper");
const registerLink=document.querySelector('.register-link')
const loginLink=document.querySelector('.login-link')
const loginbtn=document.querySelector('.btnLogo-popup')
const iconClose=document.querySelector('.icon-close')

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

loginbtn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    console.log('i am clicked')
    
});