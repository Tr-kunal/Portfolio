import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Machine Learning with GenAI',
            organization: 'W3Grads',
            duration: 'June 2025 - July 2025',
            type: 'Training',
            description: 'Developed ML models for predictive analytics and data processing pipelines using Python and TensorFlow.'
        }, 
        {
            title: 'Data Analyst',
            organization: 'SkillCred',
            duration: 'December 2023',
            type: 'Training',
            description: 'Learned data analysis and visualization using Python, pandas, and matplotlib.'
        }
    ];

    return (
        <section id="experience" className="section gradient-bg">
            <div className="container">
                <h2 className="section-title">Experience & Training</h2>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-marker"></div>
                            <div className="experience-content card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-title">{exp.title}</h3>
                                        <p className="experience-org">{exp.organization}</p>
                                    </div>
                                    <span className="experience-type">{exp.type}</span>
                                </div>
                                <p className="experience-duration">{exp.duration}</p>
                                <p className="experience-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
