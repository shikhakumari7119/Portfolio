/*  toggle icon bar*/ 
let menuIcon=document.querySelector('#menu');
let navbar=document.querySelector('.right');
menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
}
/*Active link show*/
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset= sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links=> {
links.classList.remove('active');
document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* sticky navbar  */
    let header= document.querySelector('nav');
    header.classList.toggle('sticky',window.scrollY > 100);

     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};
/*read more*/
let readMoreBtn = document.querySelector('.button');
let moreText=document.querySelector('.more-text');
readMoreBtn.addEventListener('click',()=>{
    moreText.classList.toggle('show');
    if(moreText.classList.contains('show')) {
        readMoreBtn.innerText ='Read less';
    }
    else{
        readMoreBtn.innerText='Read More';
    }
});
/*alert when submit*/

const form =document.getElementById('contact-form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let name=form.querySelector('input[type="text"]').value;
    alert(`Thank you, ${name}! Your Message sent successfully.`);
    form.reset();
});

ScrollReveal({ 
    reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.hi , h2', { origin: 'top' });
ScrollReveal().reveal('.about-img,.box,.contact form', { origin: 'bottom' });

/*typed js*/
const typed = new Typed('.cap1',{
strings:['Shikha','Shikha','Shikha'],
typeSpeed:100,
backSpeed:100,

});