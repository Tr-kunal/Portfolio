import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <p className="about-text">
                        Computer Science undergraduate with strong foundations in <span className="accent-text">Data Structures & Algorithms</span>,
                        <span className="accent-text"> Web Development</span>, and <span className="accent-text">Artificial Intelligence & Machine Learning</span>.
                        Passionate about building scalable software solutions and intelligent systems that solve real-world problems.
                        Currently seeking opportunities to apply my technical skills in software development and AI/ML roles.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
