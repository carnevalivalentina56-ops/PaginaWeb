
document.addEventListener("DOMContentLoaded", function () {

    const imagenes = document.querySelectorAll(
        ".aliniacionPelis .cuadrado img, .aliniacionPelis .cuadrado2 img, .AliniacionBotones"
    );

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                const imagen = entrada.target;

                imagen.animate(
                    [
                        { transform: "scale(1.3)" },
                        { transform: "scale(1)" }
                    ],
                    {
                        duration: 800,
                        easing: "ease-out",
                        fill: "both"
                    }
                );

                observador.unobserve(imagen);
            }

        });

    }, {
        threshold: 0.5
    });

    imagenes.forEach((imagen) => {
        observador.observe(imagen);
    });

});
