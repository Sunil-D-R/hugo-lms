// YouTube Player API
document.addEventListener('DOMContentLoaded', function() {
    const playerElement = document.getElementById('player');
    if (!playerElement) return; // Exit if not on a course page

    const videoId = playerElement.dataset.videoId;
    if (!videoId) return;

    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
});

// This function is called by the YouTube IFrame API
window.onYouTubeIframeAPIReady = function() {
    const playerElement = document.getElementById('player');
    if (!playerElement) return;

    const videoId = playerElement.dataset.videoId;
    if (!videoId) return;

    if (!window.youtubePlayer) {
        window.youtubePlayer = new YT.Player('player', {
            videoId: videoId,
            playerVars: {
                'playsinline': 1,
                'rel': 0,
                'origin': window.location.origin,
                'enablejsapi': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
};

function onPlayerReady(event) {
    console.log('Player ready');
}

function onPlayerStateChange(event) {
    console.log('Player state changed:', event.data);
}

// Timestamp functionality
document.addEventListener('DOMContentLoaded', function() {
    const timestamps = document.querySelectorAll('.timestamp-link');
    timestamps.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const time = this.dataset.time;
            if (window.youtubePlayer && time) {
                const seconds = convertTimeToSeconds(time);
                window.youtubePlayer.seekTo(seconds, true);
                window.youtubePlayer.playVideo();
            }
        });
    });
});

function convertTimeToSeconds(timeStr) {
    const parts = timeStr.split(':').reverse();
    let seconds = 0;
    for (let i = 0; i < parts.length; i++) {
        seconds += parseInt(parts[i]) * Math.pow(60, i);
    }
    return seconds;
}
