// Course Progress Tracking
class CourseProgress {
    constructor() {
        this.progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    }

    updateProgress(courseId, lessonId, percentage) {
        if (!this.progress[courseId]) {
            this.progress[courseId] = {
                lessons: {},
                overallProgress: 0
            };
        }
        
        this.progress[courseId].lessons[lessonId] = percentage;
        this.calculateOverallProgress(courseId);
        this.saveProgress();
    }

    calculateOverallProgress(courseId) {
        const lessons = this.progress[courseId].lessons;
        const totalLessons = Object.keys(lessons).length;
        const completedLessons = Object.values(lessons).filter(p => p >= 90).length;
        this.progress[courseId].overallProgress = (completedLessons / totalLessons) * 100;
    }

    saveProgress() {
        localStorage.setItem('courseProgress', JSON.stringify(this.progress));
    }

    getProgress(courseId) {
        return this.progress[courseId] || { lessons: {}, overallProgress: 0 };
    }
}

// Search Functionality
class CourseSearch {
    constructor() {
        this.fuse = null;
        this.courses = [];
        this.initSearch();
    }

    async initSearch() {
        try {
            const response = await fetch('/index.json');
            this.courses = await response.json();
            
            this.fuse = new Fuse(this.courses, {
                keys: ['title', 'description', 'categories', 'tags'],
                threshold: 0.3
            });
        } catch (error) {
            console.error('Failed to initialize search:', error);
        }
    }

    search(query) {
        if (!this.fuse) return [];
        return this.fuse.search(query);
    }
}

// Filter State Management
class CourseFilter {
    constructor() {
        this.filters = {
            category: '',
            difficulty: '',
            duration: '',
            sort: 'latest',
            tags: []
        };
        
        this.initializeFilters();
    }

    initializeFilters() {
        // Initialize filter elements
        const filterElements = {
            category: document.getElementById('categoryFilter'),
            difficulty: document.getElementById('difficultyFilter'),
            duration: document.getElementById('durationFilter'),
            sort: document.getElementById('sortFilter'),
            tags: document.getElementById('tagFilter')
        };

        // Add event listeners
        Object.entries(filterElements).forEach(([key, element]) => {
            if (element) {
                element.addEventListener('change', (e) => {
                    this.updateFilter(key, e.target.value);
                });
            }
        });
    }

    updateFilter(key, value) {
        this.filters[key] = value;
        this.applyFilters();
    }

    applyFilters() {
        const courseCards = document.querySelectorAll('.course-card');
        
        courseCards.forEach(card => {
            const visible = this.shouldShowCard(card);
            card.style.display = visible ? '' : 'none';
        });
    }

    shouldShowCard(card) {
        // Implement filter logic here based on card data attributes
        // Return true if card should be visible, false otherwise
        return true; // Placeholder
    }
}

// Mobile Navigation
class MobileNavigation {
    constructor() {
        this.init();
    }

    init() {
        const courseNav = document.querySelector('.course-navigation');
        if (!courseNav) return;

        // Add swipe handling for mobile
        let touchStartY = 0;
        let touchEndY = 0;

        courseNav.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });

        courseNav.addEventListener('touchmove', (e) => {
            touchEndY = e.touches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            if (Math.abs(diff) > 50) {
                courseNav.style.transform = `translateY(${diff > 0 ? '0' : '70vh'})`;
            }
        });

        courseNav.addEventListener('touchend', () => {
            courseNav.style.transform = '';
        });
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.courseProgress = new CourseProgress();
    window.courseSearch = new CourseSearch();
    window.courseFilter = new CourseFilter();
    window.mobileNav = new MobileNavigation();

    // Initialize YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

// YouTube Player API Integration
let player;
function onYouTubeIframeAPIReady() {
    const videoWrapper = document.querySelector('.video-wrapper');
    if (!videoWrapper) return;

    const videoId = videoWrapper.dataset.videoId;
    
    player = new YT.Player(videoWrapper.querySelector('iframe'), {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    // Track video progress
    if (event.data === YT.PlayerState.PLAYING) {
        startProgressTracking();
    } else if (event.data === YT.PlayerState.PAUSED) {
        stopProgressTracking();
    }
}

let progressInterval;
function startProgressTracking() {
    progressInterval = setInterval(() => {
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();
        const progress = (currentTime / duration) * 100;
        
        // Update progress in localStorage
        const courseId = window.location.pathname;
        const videoId = document.querySelector('.video-wrapper').dataset.videoId;
        window.courseProgress.updateProgress(courseId, videoId, progress);
        
        // Update UI
        updateProgressUI(progress);
    }, 5000);
}

function stopProgressTracking() {
    clearInterval(progressInterval);
}

function updateProgressUI(progress) {
    const progressBar = document.getElementById('courseProgress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}
