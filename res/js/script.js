document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buttons button');
    
    // Activar el primer botón al cargar la página
    //buttons[0].classList.add('active');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Reiniciar todos los botones al estado original
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Activar el botón clickeado
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const videoButtons = document.querySelectorAll('.video-button');
    const videoFrame = document.getElementById('videoFrame');
    
    // Solo cambia el video si no hay un src definido ya en el iframe
    function changeVideo(videoId) {
        if(videoId === "yafsiedbujyh"){
            const videoUrl = `https://voe.sx/e/${videoId}`;
            videoFrame.src = videoUrl;
        } else {
            const videoUrl = `https://mixdrop.ps/e/${videoId}`;
            videoFrame.src = videoUrl;
        }
    }

    // Verifica si el iframe tiene un src predefinido
    if (!videoFrame.src) {
        // Al cargar la página, solo mostrar el primer video si no hay un src predefinido
        const initialVideoId = videoButtons[0].getAttribute('data-video-id');
        changeVideo(initialVideoId);
    }

    // Agregar evento de clic a cada botón
    videoButtons.forEach(button => {
        button.addEventListener('click', function () {
            const videoId = this.getAttribute('data-video-id');
            changeVideo(videoId);

            // Activar el botón clickeado y desactivar los demás
            videoButtons.forEach(btn => {
                if (btn === button) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');

    // Función para alternar clases cada 0.5 segundos
    setInterval(function () {
        preloader.classList.toggle('pulsating');
    }, 500); // Intervalo de 0.5 segundos (500 milisegundos)
});


