import React from "react";

const Slide = props => (
  <div className="slide">
    <div className="header">
      <p>
        {props.title.length > 20
          ? `${props.title.substring(0, 20)}...`
          : props.title}
      </p>
    </div>
    <div className="image">
      <img className="slider-img" src={props.img} alt="slide" />
    </div>
    <style jsx>
      {`
        .slide {
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
          transition: all 0.5s ease;
        }

        .slide:hover {
          box-shadow: 0 10px 20px #a06cd5a6;
          transform: scale(1.1);
          position: relative;
          z-index: 2;
        }
        .header {
          background-color: #ffffff;
          padding: 20px;
          text-align: left;
          font-size: 14px;
        }
        .slider-img {
          width: 100%;
          max-width: 270px;
        }
      `}
    </style>
  </div>
);

export default Slide;
