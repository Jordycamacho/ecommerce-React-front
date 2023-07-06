import React from 'react'

export const Footer = () => {
  return (
    <footer class="main-footer">
        <div class="footer__section">
          <h2 class="footer__title">Sobre Nosostros</h2>
          <p class="footer__txt">Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus. Nulla porttitor accumsana tincidunt.</p>
        </div>
        <div class="footer__section">
          <h2 class="footer__title">Contacto</h2>
          <p class="footer__txt">numero +34 653-559-544</p>
          <p class="footer__txt">Email : jordycamacho225@gmail.com</p>
        </div>

        <div class="footer__section">
          <h2 class="footer__title">¿Quieres ofertas?</h2>
          <p class="footer__txt">By subscribing to our mailing list you will always get latest news and updates from us.</p>
          <input type="email" class="footer__input" placeholder="Ingresa tu email"/>
        </div>
        <p class="copy">© 2023 Caiser West | Diseñado por Jordy Camacho</p>
      </footer>
  )
}
