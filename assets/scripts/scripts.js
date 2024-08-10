// Exemplo de funcionalidade para rolar suavemente até uma seção
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Ajuste conforme necessário para a altura do cabeçalho

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});
const hamburger = document.getElementById('hamburger');
    const closeMenu = document.getElementById('close-menu');
    const menuItems = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        menuItems.classList.add('show');
        hamburger.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', function () {
        menuItems.classList.remove('show');
        hamburger.style.display = 'block';
        closeMenu.style.display = 'none';
    });
