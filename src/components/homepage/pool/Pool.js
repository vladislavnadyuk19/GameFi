import React, { useCallback, useRef } from "react";
import Title from "../../UI/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import PoolItem from "./PoolItem";

import "./pool.css";

function Pool() {
  const ref = useRef();

  const slidePrev = useCallback(() => {
    ref.current.swiper.slidePrev();
  });
  const slideNext = useCallback(() => {
    ref.current.swiper.slideNext();
  });
  return (
    <section className="pool">
      <div className="container-s">
        <div className="pool__top">
          <Title>UPCOMING POOL</Title>
          <div className="pool__navigation">
            <button className="pool__button" onClick={slidePrev}>
              <svg className="pool__icon-prev" width="26.2456" height="26.2456">
                <use xlinkHref="./image/icons.svg#slider-icon"></use>
              </svg>
            </button>
            <button className="pool__button" onClick={slideNext}>
              <svg width="26.2456" height="26.2456">
                <use xlinkHref="./image/icons.svg#slider-icon"></use>
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          className="pool__slider"
          spaceBetween={16}
          slidesPerView={'auto'}
          breakpoints={{

            780: {
              slidesPerView:4
            }
          }}
          ref={ref}
        >
          <SwiperSlide className="pool__item">
            <PoolItem
              to="#"
              title="Petoshi"
              status={"opening"}
              price={"100,000"}
              days={5}
              image="image1.jpg"
              imageS="image1-s.jpg"
              network="binance"
            >
              Merge your Twitter usage with blockchain through Petoshi, a Chrome
              extension that gamifies your social experience while rewarding you
              with crypto.
            </PoolItem>
          </SwiperSlide>
          <SwiperSlide className="pool__item">
            <PoolItem
              to="#"
              title="Agora"
              status={"upcoming"}
              price={"350,000"}
              image="image2.png"
              imageS="image2-s.png"
              network="binance"
            >
              Incubated by SwissBorg and Ultra, Agora is building the ultimate
              arena for opportunities in Web3: a hub for authentic & gamified
              experiences that unites leading projects, users & investors for
              mutual growth. To succeed Agora is building a GameFi Hub with 3
              core products: a DEX, a Digital Identity and a Decentralised
              Lootbox System.
            </PoolItem>
          </SwiperSlide>
          <SwiperSlide className="pool__item">
            <PoolItem
              to="#"
              title="Oxya Origin"
              status={"upcoming"}
              price={"150,000"}
              image="image3.png"
              imageS="image3-s.jpg"
              network="binance"
            >
              Oxya Origin is developing shooter, strategy and exploration games
              linked by a player-owned asset ecosystem and powered by
              cutting-edge gameplay mechanics featuring procedural AI and
              blockchain tools built in-house to deliver value to the community
              and bridge the gap between Web2 and Web3.
            </PoolItem>
          </SwiperSlide>
          <SwiperSlide className="pool__item">
            <PoolItem
              to="#"
              title="Cryptopia"
              status={"uncoming"}
              price={"400,000"}
              image="image4.png"
              imageS="image4-s.jpg"
              network="binance"
            >
              Cryptopia is the first fully decentralized, on-chain game that
              runs without central game servers. We make onboarding as easy as
              possible by our integrated multisig wallet, our
              free-to-play-and-earn model, and our gasless solution on the SKALE
              chain.
            </PoolItem>
          </SwiperSlide>
          <SwiperSlide className="pool__item">
            <PoolItem
              to="#"
              title="Better Fan"
              status={"uncoming"}
              price={"300,000"}
              image="image5.jpg"
              imageS="image5-s.png"
              network="binance"
            >
              Cryptopia is the first fully decentralized, on-chain game that
              runs without central game servers. We make onboarding as easy as
              possible by our integrated multisig wallet, our
              free-to-play-and-earn model, and our gasless solution on the SKALE
              chain.
            </PoolItem>
          </SwiperSlide>
          <SwiperSlide className="pool__item">
            <PoolItem
              to="#"
              title="Axen Al"
              status={"uncoming"}
              price={"100,000"}
              image="image6.jpg"
              imageS="image6-s.png"
              network="binance"
            >
              Cryptopia is the first fully decentralized, on-chain game that
              runs without central game servers. We make onboarding as easy as
              possible by our integrated multisig wallet, our
              free-to-play-and-earn model, and our gasless solution on the SKALE
              chain.
            </PoolItem>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Pool;
