import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./graphic.css";

function Graphic() {
  return (
    <section className="graphic">
      <Swiper
        className="graphic__slider"
        breakpoints={{
          780: {
            initialSlide: 2,
          },
        }}
      >
        <SwiperSlide className="graphic__first-item">
          <div className="graphic__wrapper">
            <h3 className="graphic__title">Roadmap</h3>
            <p className="graphic__text">
              <span>GameFi.org's</span> evolutionary path - From the simplest
              form to the most comprehensive & powerful entity in web3 universe.
            </p>
          </div>
          <picture>
            <source
              srcSet="./image/graphic/graphic1-s.svg"
              media="(max-width: 768px)"
            />
            <img src="./image/graphic/graphic1.svg" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="graphic__item">
          <img src="./image/graphic/graphic2.svg" />
        </SwiperSlide>
        <SwiperSlide className="graphic__item">
          <img src="./image/graphic/graphic3.svg" />
        </SwiperSlide>
        <SwiperSlide className="graphic__item">
          <img src="./image/graphic/graphic4.svg" />
        </SwiperSlide>
        <SwiperSlide className="graphic__item">
          <img src="./image/graphic/graphic5.svg" />
        </SwiperSlide>
        <SwiperSlide className="graphic__item">
          <img src="./image/graphic/graphic6.svg" />
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            <source
              srcSet="./image/graphic/graphic-end-s.svg"
              media="(max-width: 768px)"
            />
            <img src="./image/graphic/graphic-end.svg" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Graphic;
