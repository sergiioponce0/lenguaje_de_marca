let openBtn = document.querySelector('#open');
let closeBtn = document.querySelector('#close');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block"; // Cambiado a block
    overlay.style.opacity = "1"; // Cambiado a 1 para mayor claridad
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none"; // Cambiado a none
    overlay.style.opacity = "0"; // Opcional, ya que se oculta
});
