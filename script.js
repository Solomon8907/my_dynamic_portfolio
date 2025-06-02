
// Dynamic year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Skill button interactivity
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');
const skillInfo = {
    HTML: "HTML is used to structure web content.",
    CSS: "CSS styles the visual layout of web pages.",
    JavaScript: "JavaScript adds interactivity to websites."
};
skillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        skillDescription.textContent = skillInfo[btn.dataset.skill];
    });
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Load projects
fetch('data/portfolio_items.json')
    .then(res => res.json())
    .then(projects => {
        const container = document.getElementById('projects-container');
        projects.forEach(p => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><a href="${p.link}">View Project</a>`;
            container.appendChild(div);
        });
    })
    .catch(err => {
        console.error("Failed to load projects:", err);
    });
