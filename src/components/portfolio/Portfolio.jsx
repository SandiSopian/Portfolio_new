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
    title: "I build my personal blog using for copywriting",
    github: "https://github.com/SandiSopian/personal-blog-v1",
    demo: "https://personal-blog-v1.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Pokemon data set application using pokeAPI",
    github: "https://github.com/SandiSopian/Pokemon-app",
    demo: "https://pokemon-app-nine-umber.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Static web for search recipe using EdamamAPI",
    github: "https://github.com/SandiSopian/Recipe-App",
    demo: "https://simple-recipe-app-omega.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Real project for selling meats using landing page website",
    github: "https://github.com/SandiSopian/Landing-Page_Dagangan",
    demo: "https://jongko-daging-mang-umis.vercel.app/",
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
