import React from "react";

const Carousel = (props) => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.img} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
