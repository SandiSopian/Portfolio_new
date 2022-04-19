import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar/avatar1.png";
import AVTR2 from "../../assets/avatar/avatar2.png";
import AVTR3 from "../../assets/avatar/avatar3.png";
import AVTR4 from "../../assets/avatar/avatar4.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "John Smith",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi?",
  },
  {
    avatar: AVTR2,
    name: "Angelina",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi?",
  },
  {
    avatar: AVTR3,
    name: "Matt Shanks",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi?",
  },
  {
    avatar: AVTR4,
    name: "Catherina",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar-client" />{" "}
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
