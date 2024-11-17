document.addEventListener('DOMContentLoaded', () => {
    // Botones de activación
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Cambio de videos
    const videoButtons = document.querySelectorAll('.video-button');
    const videoFrame = document.getElementById('videoFrame');
    const videoName = document.getElementById('videoName');

    const changeVideo = (videoId, initialVideoName) => {
        let videoUrl;
        switch (initialVideoName) {
            case 'mega':
                videoUrl = `https://mega.nz/embed/${videoId}`;
                break;
            case 'mixdrop':
                videoUrl = `https://mixdrop.ps/e/${videoId}`;
                break;
            case 'voe':
                videoUrl = `https://voe.sx/e/${videoId}`;
                break;
            case 'netu':
                videoUrl = `https://hqq.ac/e/${videoId}`;
                break;
            default:
                videoName.textContent = initialVideoName;
                return;
        }
        videoFrame.src = videoUrl;
    };

    if (!videoFrame.src) {
        const { videoId, videoName: initialVideoName } = videoButtons[0].dataset;
        changeVideo(videoId, initialVideoName);
    }

    videoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const { videoId, videoName } = button.dataset;
            changeVideo(videoId, videoName);
            videoButtons.forEach(btn => btn.classList.toggle('active', btn === button));
        });
    });

    // Preloader pulsante
    const preloader = document.getElementById('preloader');
    setInterval(() => preloader.classList.toggle('pulsating'), 500);
});
