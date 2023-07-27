const sections = document.querySelectorAll('.section'); //
const controls = document.querySelectorAll('.controls');//sectBtns
const control = document.querySelectorAll('.control'); //sectBtn
const body = document.body;//allSections


function PageTransition(){
    //This changes actice-btn class name to the active icon..
    //To use the this keyword, i have to use a regular funtion and not an arrow function.

    
    
    // for(let i = 0; i < control.length; i++){
    //     control[i].addEventListener('click', function(){

    //         let currentBtn = document.querySelectorAll('.active-btn');
    //         currentBtn.classList.remove('active-btn');
    //         control[i].classList.add('active-btn');
    //         // currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    //         // this.className += 'active-btn'

    //     });
    // }
    
// control.forEach((button) => button.addEventListener('click', () => {
//     let currentBtn = document.querySelector('.active-btn');
    
//     currentBtn.classList.remove('active-btn');

//     button.classList.add('active-btn');
   
// }))


// //Make sections align with active-btn class.
//     body.addEventListener('click', (e) => {
//         let sectionId = e.target.dataset.id;

//         if(sectionId){
 
//             //remove active from the current section
//             control.forEach((btn) => {
                
//                 btn.classList.remove('active');
//             })
//             e.target.classList.add('active')

//             //Hide other sections
//             sections.forEach((section) =>{
//                 section.classList.remove('active');
//             })
//             const element = document.getElementById(sectionId);
//             element.classList.add('active')
//         } 
//     } )

//Add an event listener to the body to handle clicks
body.addEventListener('click', (e) => {
  let clickedButton = e.target.closest('.control'); 

  if (clickedButton) {

    control.forEach((button) => button.classList.remove('active-btn'));

    clickedButton.classList.add('active-btn');
    sections.forEach((section) => section.classList.remove('active'));
    
    const sectionId = clickedButton.dataset.id;
    const element = document.getElementById(sectionId);
    element.classList.add('active');
  }
});



}

PageTransition();

//Class = "name" text animation
// const initialHomeText = document.getElementById('body-text');
// const homeText = initialHomeText.innerHTML;

// initialHomeText.innerHTML = '';

// let charIndex = 0;

// function typeText(){

//     if(charIndex < homeText.length){
//         initialHomeText.innerHTML += homeText.charAt(charIndex);
//         charIndex ++;

//         setTimeout(typeText, 100);
//     }

   
// }

// typeText();