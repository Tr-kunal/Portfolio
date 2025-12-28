import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Smart Parking System',
            techStack: ['IoT', 'Machine Learning', 'Python', 'Arduino', 'TensorFlow'],
            description: 'IoT-based intelligent parking management system using ML algorithms to predict parking availability and optimize space utilization.',
            github: 'https://github.com/tr-kunal',
            demo: null
        },
        {
            title: 'Smart Weather Prediction System',
            techStack: ['Machine Learning', 'Python', 'Scikit-learn', 'Flask', 'React'],
            description: 'ML-powered weather forecasting application using historical data and advanced prediction models for accurate weather insights.',
            github: 'https://github.com/tr-kunal',
            // demo: 'https://weather-demo.netlify.app'
        },
        {
            title: 'AI-based Answer Sheet Evaluation',
            techStack: ['Deep Learning', 'NLP', 'Python', 'TensorFlow', 'OpenCV'],
            description: 'Automated answer sheet evaluation system using NLP and computer vision to assess descriptive answers and provide intelligent scoring.',
            github: 'https://github.com/tr-kunal',
            demo: null
        },
        {
            title: 'Modern Web Dashboard',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
            description: 'Full-stack responsive dashboard application with real-time data visualization, user authentication, and RESTful API integration.',
            github: 'https://github.com/tr-kunal',
            // demo: 'https://dashboard-demo.netlify.app'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card card">
                            <h3 className="project-title">{project.title}</h3>

                            <div className="tech-stack">
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-badge">{tech}</span>
                                ))}
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    GitHub
                                </a>

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
