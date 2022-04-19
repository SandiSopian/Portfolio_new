import React from "react";
import "./about.css";
import ME from "../../assets/me/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80% Completed</small>
            </article>
          </div>

          <br />
          <div>Hello, I'm a programmer who works as a web developer, also I'm work on other projects in the IT field such as SEO, web testing and so on.</div>

          <br />
          <a href="#contact" className="btn btn-primary">
            Let's Talks
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
