document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const submitButton = document.querySelector("#button-form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const objectInput = document.querySelector("#object");
  const messageInput = document.querySelector("#message");

  const publicKey = "8DE9mU0Jlc6rfujCZ";
  const serviceID = "service_kb29hka";
  const templateID = "template_keowvem";

  emailjs.init(publicKey);

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputField = {
      name: nameInput.value,
      email: emailInput.value,
      object: objectInput.value,
      message: messageInput.value,
    };

    emailjs.send(serviceID, templateID, inputField).then(() => {
      submitButton.innerText = "Messaggio Inviato";
      nameInput.value = "";
      emailInput.value = "";
      objectInput.value = "";
      messageInput.value = "";
      alert("Messaggio inviato correttamente");
      // Ritorna al testo originale del pulsante dopo un breve ritardo
      setTimeout(function () {
        submitButton.innerText = "Invia";
      }, 2000);
    });
  }),
    (error) => {
      console.log(error);
      submitButton.innerText = "Messaggio NON Inviato";
      alert("Si è verificato un errore durante l'invio del messaggio.");
    };
});

//menu toggle
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});

// change navbar color
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (window.scrollY > 100) {
    header.style.backgroundColor = "#f5dfd0";
    document.body.classList.add("scroll-down");
  } else {
    header.style.backgroundColor = "#f8e7dc";
    document.body.classList.remove("scroll-down");
  }
});
