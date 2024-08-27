document.getElementById('toggle-projects').addEventListener('click', function() {
    const projectsSection = document.querySelector('.projects');
    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
    } else {
        projectsSection.style.display = 'none';
    }
});


