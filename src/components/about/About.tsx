import Info from './Info'
import Resume  from './../../../public/assets/Resume.pdf';
import aman from './../../../public/aman.jpeg';
import Skills from '../skills/Skills';

const About = () => {
  return (
    <section className="about section" id='about'>
      <div className="title__section">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
      </div>

      <div className="about__container container grid">
        <img src={aman} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            A software engineer with a speciallization in webdevelopment
            with an experience in developing web applications using Python,
            JavaScript and MySQL. Possess knowledge of react, flask, django frameworks
            to develop the frontend and backend of the applicaiton with additional 
            experience on HTML5 and CSS.
            <br />
            ull-Stack Web Developer adept at crafting dynamic and engaging web applications. Possessing a solid background in both front-end and back-end development, I utilize a diverse skill set including:

            Back-End: Proficient in Python, employing frameworks like Flask and Django to establish resilient and scalable server-side functionality. Skilled in managing data using MySQL databases, ensuring robustness and efficiency.

            Front-End: Proficient in JavaScript and React.js, crafting intuitive and responsive user interfaces. Utilize HTML5 and CSS to deliver visually appealing designs, enhancing user experience and engagement.
            <br />
            Full-Stack Web Developer with a strong foundation in building dynamic and interactive web applications. Proficient in both front-end and back-end development, leveraging:

            Back-End: Python (Flask, Django) for robust and scalable server-side logic and data management using MySQL databases.
            Front-End: JavaScript and React.js to create user-friendly and responsive web interfaces with HTML5 and CSS for a polished look and feel.
          </p>

          <a download="" href={Resume} className="button button--flex">
            Download RESUME
            <i className="uil-down-arrow"></i>
          </a>
        </div>
      </div>
      <Skills />
    </section>
  )
}

export default About