const navbar = document.querySelector('#navbar');
const line = document.querySelectorAll('#navbar li');
const pageContainer = document.querySelector('.page-container');
const container = document.querySelector('.container');
const aboutMe = document.querySelector('.about-me');
const projects = document.querySelector('.projects');
const containerProjects = document.querySelector('#container-projects');
const contact = document.querySelector('#container-contact');
const selector1 = '#greeting';
const selector2 = '#describe';
const dissolve = document.querySelectorAll('.dissolve');
const greeting = document.querySelector(selector1);
const arr = [navbar, container];

const txt1 = 'Hello';
const txt3 = ['Hello','dzien dobry', 'Ahoj'];
const txt2 = 'My name is Jakub Ptaszek and I am front end developer';
const speedGreeting = 400;
const speedDescribe = speedGreeting / 6.5;
let k = 0;
let i = 0;

// setInterval(()=>{
//     txt3.forEach((txt, index) => {
//     setInterval(() => {
//         console.log(txt)
//     }, index * speedGreeting);
//     })
// } , speedGreeting * 3)
function resetGreeting(){
    greeting.innerHTML += '';
}

function typing1() {
      if (i < txt1.length) {
            greeting.innerHTML += txt1.charAt(i);
            i++; 
            setTimeout(typing1, speedGreeting);
          }
        }

function typing2(){
    if(k < txt2.length){
        document.querySelector(selector2).innerHTML += txt2.charAt(k);
        k++;
        setTimeout(typing2, speedDescribe);
    }
}

typing1();
typing2();


window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        navbar.style.fontSize = '.3rem';
    } else {
        navbar.style.fontSize = '1rem';
    }
}

dissolve.forEach(a => {
    a.addEventListener('click', (e)=>{
        container.classList.add('desintegrate');
    })
})