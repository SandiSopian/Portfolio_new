import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>SEO Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Keyword Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Technical Repair</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Page Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Customize User Experience</p>
            </li>
          </ul>
        </article>
        {/* End of SEO Development*/}{" "}
        <article className="service">
          <div className="service__head">
            <h3>Web Testing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Functionality Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interface Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Compatibility Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Security Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Crowd Testing</p>
            </li>
          </ul>
        </article>
        {/* End of Web Testing*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Page Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Company Profile Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commerce Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Website</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
      </div>
    </section>
  );
};

export default Services;
