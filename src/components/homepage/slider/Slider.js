import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "./slider.css";


function Slider() {
  return (
    <section className="slider">
      <div className="container-s">
        <Swiper
          className="slider__wrapper"
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination]}
          pagination
        >
          <SwiperSlide>
            <Link className="slider__link" to={"#"}>
              <img src="./image/slider/image1.png" alt="slider-image" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="slider__link" to={"#"}>
              <img src="./image/slider/image2.png" alt="slider-image" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
