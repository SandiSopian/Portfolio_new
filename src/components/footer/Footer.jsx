import React from "react";
import "./footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sandi Sopian
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sandi-sopian-007623227/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://dev.to/sandi">
          <FaDev />
        </a>
        <a href="https://medium.com/@shunasand53">
          <BsMedium />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SandiSopian. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
