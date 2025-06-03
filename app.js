/* === Menú hamburguesa === */
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('a-abierto');
});

/* === Slider de ofertas === */
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('activo'));
  slides[index].classList.add('activo');
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

/* Pase automático cada 6 s */
setInterval(nextSlide, 6000);

window.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');
  const mediaUrl = heroSection.getAttribute('data-media');
  if (mediaUrl) {
    heroSection.style.setProperty('--dynamic-bg', `url('${mediaUrl}')`);
  }
});

// Mostrar el modal al cargar la página
window.onload = function () {
  const splashScreen = document.getElementById('splash-screen');
  setTimeout(() => {
    splashScreen.style.display = 'none';
  }, 3000); // Oculta el splash screen después de 3 segundos

  const modal = document.getElementById('modal-privacidad');
  modal.style.display = 'block';

  // Botón aceptar
  document.getElementById('aceptar').onclick = function () {
    modal.style.display = 'none';
    alert('Gracias por aceptar nuestras políticas de privacidad.');
  };

  // Botón rechazar
  document.getElementById('rechazar').onclick = function () {
    modal.style.display = 'none';
    alert('Has rechazado nuestras políticas de privacidad. Algunas funciones pueden no estar disponibles.');
  };
};

document.getElementById('btn-login').addEventListener('click', function () {
  document.getElementById('modal-login').style.display = 'flex';
});

document.getElementById('close-login').addEventListener('click', function () {
  document.getElementById('modal-login').style.display = 'none';
});

document.getElementById('form-login').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Aquí puedes enviar los datos al servidor para validación
  alert(`Iniciaste sesión con el correo: ${email}`);
  document.getElementById('modal-login').style.display = 'none';
});

// Mostrar el modal de registro
document.getElementById('btn-register').addEventListener('click', function () {
  document.getElementById('modal-register').style.display = 'flex';
});

// Cerrar el modal de registro
document.getElementById('close-register').addEventListener('click', function () {
  document.getElementById('modal-register').style.display = 'none';
});

// Manejar el formulario de registro
document.getElementById('form-register').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Simular el registro (puedes enviar estos datos a tu backend)
  alert(`Cuenta creada para: ${name} (${email})`);
  document.getElementById('modal-register').style.display = 'none';

  // Aquí puedes enviar los datos al servidor para guardarlos
});

// Manejar el enlace de condiciones de privacidad
document.querySelector('a[href="privacidad.html"]').addEventListener('click', function (event) {
  event.preventDefault(); // Evita el comportamiento predeterminado
  window.open('privacidad.html', '_blank'); // Abre la página en una nueva pestaña
});

