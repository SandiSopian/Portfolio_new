import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio/portfolio1.jpg";
import IMG2 from "../../assets/portfolio/portfolio2.jpg";
import IMG3 from "../../assets/portfolio/portfolio3.jpg";
import IMG4 from "../../assets/portfolio/portfolio4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "freeCodeCamp challenge to build a Tribute Page to pass exam Responsive Web Design Projects.",
    github: "https://github.com/SandiSopian/Tribute_Page-Larc-en-Ciel",
    demo: "https://sandisopian.github.io/Tribute_Page-Larc-en-Ciel/",
  },
  {
    id: 2,
    image: IMG2,
    title: "freeCodeCamp challenge to build a Tribute Page to pass exam Responsive Web Design Projects.",
    github: "https://github.com/SandiSopian/FCC-technical-documentation",
    demo: "https://sandisopian.github.io/FCC-technical-documentation/",
  },
  {
    id: 3,
    image: IMG3,
    title: "freeCodeCamp challenge to build a Survey Form to pass exam Responsive Web Design Projects.",
    github: "https://github.com/SandiSopian/Survey_Form-Larc-en-Ciel",
    demo: "https://sandisopian.github.io/Survey_Form-Larc-en-Ciel/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Build simple web application using frameworks Laravel",
    github: "https://github.com/SandiSopian/Laravel/tree/main/coba-laravel",
    demo: "https://sandssblog.000webhostapp.com/categories",
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi?",
  //   github: "https://github.com/",
  //   demo: "https://codepen.com",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi?",
  //   github: "https://github.com/",
  //   demo: "https://codepen.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
