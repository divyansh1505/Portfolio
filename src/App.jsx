import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Divyansh's Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="section home">
          <h2>Welcome to My Portfolio</h2>
          <p>Namaste, I'm Divyansh, a passionate programmer and developer with skills in Python, C, and web development using React.js and Javascript.
            I am activily working on upskilling myself, my current focus being on mastering react.js. I am also enthusiastic about Artificial Intelligence
            and Machine Learning hence i am also working with libraries like Pandas and OpenCV on Python.
             </p>

        </section>

        <section id="skills" className="section skills">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="./public/Images/react.png" alt="React Logo" />
              <p><strong>React:</strong> Beginner</p>
            </div>
            <div className="skill-item">
              <img src="./public/Images/python.png" alt="Python Logo" />
              <p><strong>Python:</strong> Proficient (My strongest language)</p>
            </div>
            <div className="skill-item">
              <img src="./public/Images/c.png" alt="C Logo" />
              <p><strong>C:</strong> Decent </p>
            </div>
            <div className="skill-item">
              <img src="./public/Images/js.png" alt="HTML, CSS, JS Logo" />
              <p><strong>HTML, CSS, JavaScript:</strong> Good understanding</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <h2>My Projects</h2>
          <ul>
            <li><strong>Python Game:</strong> A Rock-Paper-Scissors game built in Python.</li>
            <li><strong>Personal Blog:</strong> A blog built using HTML, CSS, and JavaScript.</li>
            <li><strong>GitHub:</strong> Check out my <a href="https://github.com/divyansh1505" target="_blank" rel="noopener noreferrer">GitHub</a> for more projects.</li>
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact Me</h2>
          <p>Email: divynsh1505@gmail.com</p>
          <p>GitHub: <a href="https://github.com/divyansh1505" target="_blank" rel="noopener noreferrer">Divyansh Dubey</a></p>
        </section>
      </main>

      <footer>
        <p>© 2024 Divyansh's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

