document.addEventListener("DOMContentLoaded", function () {
    new Glide('.brinquedo', {
        type: 'carousel', // Ou 'slider' conforme a necessidade
        startAt: 0,
        perView: 1,
        autoplay: 3000, // Tempo em milissegundos
        hoverpause: true,
        animationDuration: 800,
        animationTimingFunc: 'ease-in-out'
    }).mount();
});
