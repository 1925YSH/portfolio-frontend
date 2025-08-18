import React from 'react';
import './Home.css';
import image from '../assets/profile1.jpeg'

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="content">
        <h1>Hi, I'm <span>Yash Otwal</span></h1>
        <h2 className="typing">Full Stack Developer</h2>
        <p> I build responsive, modern web applications using the MERN stack,
            focusing on performance, scalability, and a seamless user experience.
            I love creating  UIs and solving real-world problems with code.</p>
        <div className="home-buttons">
          {/* <a href="https://drive.google.com/file/d/1FvXvScLy0Ds3aYSVq0zfsPyjkj8pwXFu/view?usp=drive_link" download target='blank' className="btn">Download Resume</a> */}
          <a href="/18Aug.pdf" download className="btn">Download Resume</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>

        
      </div>
      <div className="home-right">
          <img src={image} alt="Yash Otwal" />
        </div>
    </section>
  );
};

export default Home;
