import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="education-content">
                    <div className="education-card card">
                        <div className="education-icon">🎓</div>
                        <h3 className="degree-title">Bachelor of Technology in Computer Science</h3>
                        <p className="university-name">GLA University</p>
                        <div className="education-details">
                            <span className="education-year">Expected Graduation: 2027</span>
                            {/* <span className="education-status">3rd Year (6th Semester)</span> */}
                        </div>
                        <p className="education-description">
                            Specialization in Artificial Intelligence & Machine Learning and IoT
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
