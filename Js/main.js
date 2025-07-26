const form = document.getElementById("contactForm");
const nameInput = document.getElementById("firstName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const regexpForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Cookie popup
const popup = document.querySelector('.cookie-popup');

if (!localStorage.getItem('cookieEnabled')) {
  popup.style.display = 'block';
}

function cookieBtnClicked(answer) {
  localStorage.setItem('cookieEnabled', answer);
  popup.style.display = 'none';
}

const yesBtn = document.querySelector(".cookie-popup_btn.yes");
const noBtn = document.querySelector(".cookie-popup_btn.no");

if (yesBtn) yesBtn.addEventListener("click", function() {
  cookieBtnClicked("yes");
});

if (noBtn) noBtn.addEventListener("click", function() {
  cookieBtnClicked("no");
});

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    if (emailInput.value.length === 0) {
      alert("Email is required");
    } else if (nameInput.value.length === 0) {
      alert("Name field is required");
    } else if (!regexpForEmail.test(emailInput.value)) {
      alert("Email format is incorrect");
    } else {
      console.log("form submitted");
    }
  });
} else {
  console.error("Form with id 'contactForm' not found!");
}

// Scroll ]
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
