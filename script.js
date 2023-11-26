let mobileHide=document.querySelector('.mobile-hide')
let ul=document.querySelector('ul');
let links=document.querySelectorAll('ul li');
let closing=document.querySelector('#close');
mobileHide.onclick=function(){
mobileHide.classList.toggle('active');
    ul.classList.toggle('active');
    closing.classList.toggle('active');
}
links.forEach(link=>{
    link.addEventListener("click",(e)=>{
     mobileHide.classList.toggle('active');
     ul.classList.toggle('active');    
        e.preventDefault();
        document.querySelector(e.target.dataset.title).scrollIntoView({
        behavior:'smooth'
        })
       bullets.forEach(ele=>{
        if(ele.target.dataset.title)
       ele.classList.add("active");
       })
    })
})

closing.onclick=function(){
    ul.classList.remove('active')
}
let bullets=document.querySelector('.bullets');
bullets.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


// ScrollReveal({ 
//     reset: true,
//     distance:'80px',
//     duration:2000,
//     delay:200
//  });
//  ScrollReveal().reveal('.heading', { origin:'top' });
//  ScrollReveal().reveal('.popular-box', { origin:'bottom' });
//  ScrollReveal().reveal('.introduction-text', { origin:'left' });
//  ScrollReveal().reveal('.introduction-img', { origin:'right' });
