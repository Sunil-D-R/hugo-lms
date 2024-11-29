function filterCourses(category) {
    const courses = document.querySelectorAll('.course-card');
    const activeFilter = document.querySelector(`[data-category="${category}"]`);
    const allFilters = document.querySelectorAll('.category-filter');

    // Update active filter styles
    allFilters.forEach(filter => {
        filter.classList.remove('bg-primary-600', 'text-white');
        filter.classList.add('bg-gray-100', 'text-gray-700');
    });

    if (activeFilter) {
        activeFilter.classList.remove('bg-gray-100', 'text-gray-700');
        activeFilter.classList.add('bg-primary-600', 'text-white');
    }

    courses.forEach(course => {
        if (category === 'all' || course.dataset.categories.includes(category)) {
            course.classList.remove('hidden');
        } else {
            course.classList.add('hidden');
        }
    });
}
