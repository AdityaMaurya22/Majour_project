import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from '../images/testimonial1.png';

const CarouselComponent = () => {
  const images = [
    {
      src: {testimonial1},
      title: "Title 1",
      description: "Description for slide 1",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+2",
      title: "Title 2",
      description: "Description for slide 2",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+3",
      title: "Title 3",
      description: "Description for slide 3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="carousel-card">
            <div className="sect4_card">
              <img src={item.src} alt={`Slide ${index + 1}`} className="card-img" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
