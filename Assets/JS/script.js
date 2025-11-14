const aboutMeSection = document.getElementById("about-me");

let about = [
    {
        title: "Clean Code",
        description: "Writing maintainable, scalable, and efficient code is my passion.",
        icon: "bi bi-code-slash"
    },

    {
        title: "Design Focus",
        description: "Creating beautiful and intuitive user interfaces that users love.",
        icon: "bi bi-paint-bucket"
    },

    {
        title: "Performance",
        description: "Optimizing web applications for speed and efficiency is key to a great user experience.",
        icon: "bi bi-speedometer"
    },

    {
        title: "Collaboration",
        description: "I thrive in team environments and believe in the power of collaboration.",
        icon: "bi bi-people"
    }
];

about.forEach(function (item) {
    aboutMeSection.innerHTML +=
        `<div class="col-md-6 col-lg-4 d-flex justify-content-center">
                        <div class="clean-card text-center p-4 rounded-4 w-100">
                            <div class="icon-bg mx-auto mb-3 d-flex align-items-center justify-content-center">
                                <i class="${item.icon}"></i>
                            </div>
                            <h3 class="fw-bold mb-2">${item.title}</h3>
                            <p class="mb-0">${item.description}</p>
                        </div>
                    </div>`
});

const skillsContainer = document.getElementById("skills-container");

let skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Vercel" },
    { name: "Netlify" }
];

skills.forEach(function (skill) {
    skillsContainer.innerHTML +=
        `<p class="text-secondary fs-5 rounded-5 d-inline-block p-3 text-light fw-semibold  border-3 card bg-dark">${skill.name}</p>`;
});


const projectsContainer = document.getElementById("projects-container");

let projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        imageUrl: "https://i.ibb.co/RGwP6tJG/image.png",
        projectUrl: "https://haselportfolio.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub"]


    },

    {
        title: "E-Commerce Product Page",
        description: "A product page for an e-commerce website showcasing various products.",
        imageUrl: "https://i.ibb.co/S4Vsymyw/image.png",
        projectUrl: "https://jayniecollection.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Vercel", "GitHub"]
    },

    {
        title: "Calculator App",
        description: "A simple calculator app with basic arithmetic operations.",
        imageUrl: "https://i.ibb.co/xtqWLv8y/image.png",
        projectUrl: "https://cal-culator-app-web.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub"]
    },

    {
        title: "To-Do List",
        description: "A to-do list app to help users manage their tasks effectively.",
        imageUrl: "https://i.ibb.co/TqRKMw6Y/image.png",
        projectUrl: "https://moderntodolistapp.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub"]
    },

    {
        title: "Weather App",
        description: "A weather app that provides real-time weather information for any location.",
        imageUrl: "https://i.ibb.co/xKdDyyv5/image.png",
        projectUrl: "https://wea-ther-forecast.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub", "API",]
    },

    {
        title: "Sign Up Form",
        description: "A responsive sign-up form with validation and user feedback.",
        imageUrl: "https://i.ibb.co/0VX9PbTb/image.png",
        projectUrl: "https://sign-up-pag-e.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub"]
    },

    {
        title: "Landing Page",
        description: "A landing page to promote a product or service.",
        imageUrl: "https://i.ibb.co/5X2J6k52/image.png",
        projectUrl: "https://bizinote.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub"]
    },

    {
        title: "Currency Converter",
        description: "A currency converter app that allows users to convert between different currencies.",
        imageUrl: "https://i.ibb.co/ymsP4pCw/image.png",
        projectUrl: "https://ratewise-fx.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub", "API"]
    },

    {
        title: "Quote Generator",
        description: "A random quote generator that displays inspirational quotes.",
        imageUrl: "https://i.ibb.co/RkdTpYkh/image.png",
        projectUrl: "https://quote-gen-app.netlify.app/",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel", "GitHub", "API"]
    },


    
];

projects.forEach(function (project) {
    projectsContainer.innerHTML +=
        `<div class="project-card rounded-4 overflow-hidden" style="max-width: 480px; width: 100%;">
                <div class="project-image position-relative" style="background: linear-gradient(180deg, #f8f8fa 60%, #181828 100%); height: 200px; display: flex; align-items: center; justify-content: center;">
                    <img src="${project.imageUrl}" alt="${project.title}" loading="lazy" onerror="this.onerror=null;this.src='Assets/IMAGES/placeholder.png'" class="img-fluid position-absolute top-0 start-0 w-100 h-100 project-img" style="opacity: 0.95;">
                    <div class="position-absolute end-0 bottom-0 p-3 d-flex gap-2">
                        <a href="${project.projectUrl}" class="btn btn-dark btn-sm rounded-3" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
                <div class="project-content p-4" style="background: #181828;">
                    <h3 class="fw-bold mb-2" style="color: #7c4dff; font-size: 2rem;">${project.title}</h3>
                    <p class="text-secondary mb-3" style="font-size: 1.1rem;">${project.description}</p>
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <span class="project-pill">${project.technologies[0]}</span>
                        <span class="project-pill">${project.technologies[1]}</span>
                        <span class="project-pill">${project.technologies[2]}</span>
                        <span class="project-pill">${project.technologies[3]}</span>
                        <span class="project-pill">${project.technologies[4]}</span>
                        <span class="project-pill">${project.technologies[5]}</span>
                    </div>
                    <div class="d-flex gap-3">
                        <a href="${project.projectUrl}" class="btn btn-demo flex-grow-1 d-flex align-items-center justify-content-center gap-2" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right"></i>Live Demo</a>
                    </div>
                </div>
            </div>`
}) 