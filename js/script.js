//homepage video button
let video = document.getElementById("hero-video");
let btn = document.getElementById("video-btn");

// pause and play the video
function playPause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause <i class='fas fa-pause'></i>";
  } else {
    video.pause();
    btn.innerHTML = "play <i class='fas fa-play'></i>";
  }
}

//landing page animation

// let homepageLogo = document.getElementById('logo-main');

// document.addEventListener("DOMContentLoaded", function(e) {
//   document.getElementById('page-load').classList.add('fade');
// });

// setTimeout(function() {
//   homepageLogo.style.opacity = '1';
//   homepageLogo.style.transform = 'translateY(-20px)';
// }, 700);
// setTimeout(function() {
//   document.getElementById('page-load').style.zIndex = '-10';
// }, 1700);


//modal

let socialStrategy = document.getElementById('services--strategy');

document.addEventListener('click', (e) => {
  console.log(e.target);
})

// let modal;
// document.addEventListener("click", (e) => {
//   console.log('clicked')
//   if (e.target.className === "services--item") {
//     console.log(e.target);
//     modal = document.getElementById(e.target.dataset.id);
//     openModal(modal);
//   } else if (e.target.className === "modal-close") {
//     closeModal(modal);
//   } else {
//     return;
//   }
// });

// const openModal = (modal) => {
//   document.body.style.overflow = "hidden";
//   modal.setAttribute("open", "true");
//   document.addEventListener("keydown", escClose);
//   let overlay = document.createElement("div");
//   overlay.id = "modal-overlay";
//   document.body.appendChild(overlay);
// };

// const closeModal = (modal) => {
//   document.body.style.overflow = "auto";
//   modal.removeAttribute("open");
//   document.removeEventListener("keydown", escClose);
//   document.body.removeChild(document.getElementById("modal-overlay"));
// };

// const escClose = (e) => {
//   if (e.keyCode == 27) {
//     closeModal();
//   }
// };
