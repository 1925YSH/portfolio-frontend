import React from 'react';
import './Skills.css';


const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="title">My Skills</h2>
        <p className="subtitle">— What I Know ? —</p>

        <div className="skills-content">
          {/* Left Column - Experience */}
          <div className="skills-left">
            <h3>INTERNSHIP</h3>
            <ul>
              <li>Ypsilon IT Solutions Pvt. Ltd – Full Stack Developer Intern</li>
              <li>CodSoft – Web Developer Intern</li>
            </ul>

            <h3>PROJECTS</h3>
            <ul>
              <li>Food Delivery Web App (MERN Stack)</li>
              <li>Gym Web Page (MERN Stack)</li>
              <li>E-Agro Platform (MERN Stack)</li>
              <li>Weather App (HTML, CSS, JS)</li>
            </ul>

            <h3>DEVELOPMENT SKILLS</h3>
            <p>
              I work with JavaScript, React.js, Node.js, Express.js, MongoDB, and have strong fundamentals in HTML, CSS, and Java.
            </p>
          </div>

          {/* Right Column - Categorized Skills */}
<div className="skills-right">

  <h3>Languages</h3>
  {[
    { name: 'Java Core & Advance ', level: 60 },
    { name: 'JavaScript', level: 70 }
  ].map((skill, idx) => (
    <div className="skill-bar" key={idx}>
      <div className="skill-info">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
      </div>
    </div>
  ))}

  <h3>Developer Tools</h3>
  {[
    { name: 'Git & GitHub', level: 70 },
    { name: 'VS Code', level: 85 },
  ].map((tool, idx) => (
    <div className="skill-bar" key={idx + 100}>
      <div className="skill-info">
        <span>{tool.name}</span>
        <span>{tool.level}%</span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${tool.level}%` }}></div>
      </div>
    </div>
  ))}

  <h3>Technologies</h3>
  {[
    { name: 'React.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'MongoDB', level: 70 },
  ].map((tech, idx) => (
    <div className="skill-bar" key={idx + 200}>
      <div className="skill-info">
        <span>{tech.name}</span>
        <span>{tech.level}%</span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${tech.level}%` }}></div>
      </div>
    </div>
  ))}

</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
