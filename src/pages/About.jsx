import React, { useState } from 'react';
import './About.css';
import profileImg from '../assets/profile1.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';


const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about-tabs">
        <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About Me</button>
        <button onClick={() => setActiveTab('education')} className={activeTab === 'education' ? 'active' : ''}>Education</button>
      </div>

      {activeTab === 'about' && (
        <div className="about-container">
          <div className="about-left">
            <img src={profileImg} alt="Yash Otwal" />
          </div>
          <div className="about-right">
            <h3>A passionate Full Stack Developer</h3>
           <p>
  I'm a passionate Full Stack Developer with hands-on experience in building modern web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). I focus on creating clean, responsive UIs and writing efficient backend logic that ensures scalability and performance.
</p>
<p>
  I thrive in collaborative environments, love solving real-world challenges through code, and constantly seek to learn and adapt with evolving technologies. Whether it's building from scratch or enhancing existing systems, I enjoy turning ideas into impactful digital solutions.
</p>

            <a href="/yashresume(1)(1).pdf" download className="btn">CV <i className="fas fa-download"></i></a>
            <div className="social-links">
              <a href="https://github.com/1925YSH" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/yash-otwal-55137a258" target="_blank"><i className="fab fa-linkedin"></i></a>
              
            </div>
          </div>
        </div>
      )}

      {activeTab === 'education' && (
        <div className="education-container">
          <div className="edu-item">
            🎓 <strong>B.Tech in Computer Science</strong><br />
            Institute of Engineering & Science, IPS Academy Indore<br />
            2021–2025 || CGPA: 8.4
          </div>
          <div className="edu-item">
            🎓 <strong>Class 12th</strong><br />
            RHHS School, Zirapur<br />
            2020–2021 || Percentage: 87%
          </div>
          <div className="edu-item">
            🎓 <strong>Class 10th</strong><br />
            MTCH School, Khilchipur<br />
            2018–2019 || Percentage: 88%
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
