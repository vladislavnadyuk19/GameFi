import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PoolItem({
  image = "",
  imageS = "",
  to = "#",
  status = "opening",
  network = "",
  days = 0,
  title = "",
  children = [],
}) {
  const futureDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  const [data, setData] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const updateTime = () => {
    let data = (futureDate - new Date()) / 1000;
    const days = Math.floor(data / 86400);
    let hours = Math.floor(data / 3600) % 24;
    let minutes = Math.floor(data / 60) % 60;
    let seconds = Math.floor(data % 60);
    setData({
      days: getData(days) + "d",
      hours: getData(hours) + "h",
      minutes: getData(minutes) + "m",
      seconds: getData(seconds) + "s",
    });
  };

  function getData(value) {
    if (value < 10) {
      return "0" + value;
    } else return value;
  }
  useEffect(() => {
    let timer;
    if (days) {
      timer = setInterval(updateTime, 1000);
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Link className="pool__item" to={to}>
        <div className="pool__tag">
          <img src="./image/pool/yellow-tag.webp" />
        </div>
        <div className="pool__image-wrapper">
          <img className="pool__item-image" src={`./image/pool/${image}`} />
          <div className={`pool__status pool__status--${status}`}>
            <span>{status.toUpperCase()}</span>
          </div>
        </div>
        <div className="pool__title-wrapper">
          <img className="pool__title-image" src={`./image/pool/${imageS}`} />
          <h5 className="pool__title">{title}</h5>
        </div>
      </Link>
      <p className="pool__text">{children}</p>
      <div className="pool__network">
        <span>Network: </span>
        <svg width={28} height={28}>
          <use xlinkHref={`./image/icons.svg#${network}`}></use>
        </svg>
      </div>
      <div className="pool__price-wrapper">
        <span className="pool__price-left">TOTAL RAISE</span>
        <span>$100,000</span>
      </div>

      {days ? (
        <div className="pool__data-wrapper">
          <p className="pool__data-title">Whitelist Phase Ends In</p>
          <div className="pool__data">
            <span> {data.days}</span>
            <span>:</span>
            <span> {data.hours}</span>
            <span>:</span>
            <span> {data.minutes}</span>
            <span>:</span>
            <span> {data.seconds}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PoolItem;
