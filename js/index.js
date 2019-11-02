// Your code goes here
//Example
// eventTarget.addEventListener("keydown", event => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }
//     do something
//   });

// makes nav text change color.  
let colorfulNav = document.querySelector('nav');
colorfulNav.addEventListener('mouseover', (element) =>{
element.target.style.color = 'orange';

setTimeout(() => {
    element.target.style.color = '';
}, 500);
},false);

//? (dblclick) Makes image larger by toggling the class 'large-img'
let changeImg = document.querySelector('.intro img');

changeImg.addEventListener('dblclick', (element) => {
    changeImg.classList.toggle('large-img')

setTimeout(() => {
    element.target.classList = '';
}, 500);
},false);

//? Drag and Drop
let dragged;

document.addEventListener('drag', (element) => {

}, false);

document.addEventListener('dragstart', (element) => {
    dragged = element.target;
    element.target.style.opacity =.5;
}, false);

document.addEventListener('dragend', (element) => {
    element.target.style.opacity = '';
}, false);

document.addEventListener('dragover', (element) => {
    element.preventDefault();
  }, false);

  document.addEventListener('dragenter', (element) => {
    if (element.target.className == 'dropzone') {
      element.target.style.backgroundColor = 'red';
    }
  
  }, false);

document.addEventListener("dragleave", (element) => {
// reset background of potential drop target when the draggable element leaves it
if (element.target.className == "dropzone") {
    element.target.style.background = "";
}
  }, false);

document.addEventListener("drop", (element) => {
    // prevent default action (open as link for some elements)
element.preventDefault();
  if (element.target.className == 'dropzone') {
    element.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    element.target.appendChild( dragged );
  }
}, false);
