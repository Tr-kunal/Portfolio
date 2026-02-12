import './Hero.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero grid-background">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Kunal Singhal</span>
                    </h1>
                    <h2 className="hero-title">
                        Computer Science Undergraduate | AIML | Web Development | DSA
                    </h2>
                    <p className="hero-tagline">
                        Building intelligent systems and scalable software solutions
                    </p>

                    <div className="hero-cta">
                        <a href="/Resume.pdf" download className="btn btn-primary">
                            Download Resume
                        </a>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn btn-outline"
                        >
                            View Projects
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="floating-card card-1">
                        <span className="tech-icon">🤖</span>
                        <p>AI/ML</p>
                    </div>
                    <div className="floating-card card-2">
                        <span className="tech-icon">💻</span>
                        <p>Web Dev</p>
                    </div>
                    <div className="floating-card card-3">
                        <span className="tech-icon">⚡</span>
                        <p>DSA</p>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
