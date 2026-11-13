const hearts = document.querySelectorAll('.fa-heart');

hearts.forEach(heart =>{
    heart.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('liked');
    })
})

const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('click', function(event) {
        videos.forEach(v => {
            if (v !== this) {
                v.muted = true;
                v.pause();
                v.play();
            }
        });
        this.muted = !this.muted;

        const badge = this.nextElementSibling;
        if (badge && badge.classList.contains('mute-badge')) {
            if (this.muted) {
                badge.style.opacity ='1';
            } else {
                badge.style.opacity = '0';
            }
        }

    })
})