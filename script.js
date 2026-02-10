const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

// Posición inicial del botón "No"
let noX = 150;
let noY = 10;
noBtn.style.left = noX + 'px';
noBtn.style.top = noY + 'px';

// Cuando el ratón se acerca al botón "No", se mueve
noBtn.addEventListener('mousemove', (e) => {
  const rect = noBtn.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const distance = Math.hypot(
    mouseX - (rect.left + rect.width / 2),
    mouseY - (rect.top + rect.height / 2)
  );

  if (distance < 80) {
    const container = noBtn.parentElement.getBoundingClientRect();
    const maxX = container.width - rect.width;
    const maxY = container.height - rect.height;

    noX = Math.random() * maxX;
    noY = Math.random() * maxY;

    noBtn.style.left = noX + 'px';
    noBtn.style.top = noY + 'px';
  }
});

// Cuando pulsa "Sí"
yesBtn.addEventListener('click', () => {
  message.textContent = '¡Sabía que dirías que sí! 💖';

  const destinatario = 'bielnieto21@gmail.com'; // pon aquí tu Gmail
  const asunto = encodeURIComponent('Respuesta San Valentín');
  const cuerpo = encodeURIComponent('Ha respondido: SÍ, quiero ser tu San Valentín 💘');

  // ABRIR GMAIL DIRECTAMENTE
  window.location.href =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;
});

// Si por milagro hace clic en "No"
noBtn.addEventListener('click', () => {
  message.textContent = '¿Cómo que no? 😭 (inténtalo otra vez...)';
});