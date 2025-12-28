import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Java', 'Python', 'JavaScript', 'SQL']
        },
        {
            title: 'Web Development',
            skills: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB', 'REST APIs']
        },
        {
            title: 'AI & Machine Learning',
            skills: ['Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy']
        },
        {
            title: 'Tools & Technologies',
            skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'MySQL']
        }
    ];

    return (
        <section id="skills" className="section gradient-bg">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category card">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
