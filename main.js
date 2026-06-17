const imagenesGaleria = document.querySelectorAll('.galeria-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const cerrarLightbox = document.querySelector('.cerrar-lightbox');

imagenesGaleria.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = imagen.src;
  });
});

cerrarLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (evento) => {
  if (evento.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
const formulario = document.getElementById('formulario-cotizacion');

if (formulario) {
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const empresa = document.getElementById('empresa').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = 
`Hola, quiero solicitar una cotización para Grupo DKF.

Nombre: ${nombre}
Empresa: ${empresa}
Teléfono: ${telefono}
Correo: ${correo}
Servicio requerido: ${servicio}
Detalle del proyecto: ${mensaje}

Quedo atento/a a su contacto.`;

    const numeroWhatsApp = '56934216712';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    alert('Gracias por contactarnos. Serás redirigido a WhatsApp para enviar tu solicitud.');
    window.open(url, '_blank');

    formulario.reset();
  });
}
const contadores = document.querySelectorAll('.contador');

const iniciarContadores = () => {
  contadores.forEach(contador => {
    const objetivo = +contador.dataset.valor;
    let actual = 0;

    const incremento = objetivo / 50;

    const actualizar = () => {
      actual += incremento;

      if (actual < objetivo) {
        contador.innerText = Math.ceil(actual);
        requestAnimationFrame(actualizar);
      } else {
        contador.innerText = objetivo;
      }
    };

    actualizar();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      iniciarContadores();
      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector('.stats'));