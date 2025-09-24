import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Image src="/Logo.jpg" alt="LoqueBrinque" width={100} height={100} />
        <div className="logo">Loque Brinque</div>
        <button className="hamburger" id="hamburger">
          <i className="fas fa-bars"></i>
        </button>
        <button className="close-menu" id="close-menu" style={{ display: 'none' }}>
          <i className="fas fa-times"></i>
        </button>
        <nav id="navbar">
          <ul id="menu-items">
            <li><a href="#hero">Home</a></li>
            <li><a href="#brinquedos">Brinquedos</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            {/* <li><a href="#contato">Contato</a></li> */}
            <li><a href="#contato" className="cta">Reserve Agora</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="hero">
        <h1>Transforme Festas em Aventuras Inesquecíveis!</h1>
        <p>Locação de brinquedos que trazem diversão e alegria para qualquer ocasião.</p>
      </section>

      <section id="brinquedos-container">
        <div id="brinquedos">
          <h2>Nossos Brinquedos</h2>
          <div className="glide brinquedo">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <Image src="https://via.placeholder.com/150" alt="Brinquedo 1" width={150} height={150} />
                  <h3>Brinquedo 1</h3>
                  <p>Para crianças de 3 a 7 anos. Diversão garantida!</p>
                  <a href="#reserva" className="cta">Reserve Agora</a>
                </li>
                <li className="glide__slide">
                  <Image src="https://via.placeholder.com/150" alt="Brinquedo 1" width={150} height={150} />
                  <h3>Brinquedo 2</h3>
                  <p>Para crianças de 8 a 14 anos. Diversão garantida!</p>
                  <a href="#reserva" className="cta">Reserve Agora</a>
                </li>
                <li className="glide__slide">
                  <Image src="https://via.placeholder.com/150" alt="Brinquedo 1" width={150} height={150} />
                  <h3>Brinquedo 3</h3>
                  <p>Para todas as idades. Diversão garantida!</p>
                  <a href="#reserva" className="cta">Reserve Agora</a>
                </li>
                {/* Adicione mais slides conforme necessário */}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&#10094;</button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&#10095;</button>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona">
        <h2>Como Funciona</h2>
        <ol>
          <li>Escolha os brinquedos.</li>
          <li>Agende a data.</li>
          <li>Entrega e montagem no local.</li>
          <li>Diversão garantida!</li>
        </ol>
      </section>

      <section id="depoimentos">
        <h2>O que nossos clientes dizem</h2>
        <div className="depoimento">
          <p>"Foi a melhor festa de todas! As crianças amaram os brinquedos!"</p>
          <cite>- Maria S.</cite>
        </div>
      </section>

      <section id="contato" className="form">
        <h2>Entre em Contato</h2>
        <form>
          <input type="text" name="nome" placeholder="Seu Nome" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea name="mensagem" placeholder="Sua Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer>
        <div className="container">
          <div className="footer-logo">
            <Image src="/Logo.jpg" alt="CADPOG" width={100} height={100} />
          </div>
          <div className="footer-social">
            <h2>Siga-nos:</h2>
            <div className="social-links">
              <a href="https://www.facebook.com/cleber.weber.14" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://www.instagram.com/loquebrinque01/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
          <div className="footer-info">
            <p>&copy; 2024 Loque Brinque. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}