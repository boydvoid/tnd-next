import React, { Component } from "react";
import PBtn from "../PBtn/PBtn";
import Slider from "react-slick";

class CollectionSlider extends Component {
  state = {
    items: [
      {
        img:
          "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
        link:
          "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
      },
      {
        img:
          "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
        link:
          "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
      },
      {
        img:
          "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
        link:
          "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
      },
      {
        img:
          "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
        link:
          "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
      },
      {
        img:
          "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
        link:
          "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
      },
      {
        img:
          "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
        link:
          "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588",
        name: "Link Name"
      }
    ]
  };

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      arrows: false
    };
    return (
      <div className="container-fluid grey border-bottom padding-30">
        <div className="container">
          <div className="row-contained">
            <Slider {...settings}>
              {this.state.items.map((item, index) => {
                return <img src={item.img} alt="" />;
              })}
            </Slider>
          </div>
          <div className="row">
            <div className="col-xl-2">
              <PBtn>Visit My Shop</PBtn>
            </div>
          </div>
        </div>
        <style jsx global>
          {`
            .slick-track {
              display: flex;
            }

            .slick-list {
              postition: relative;
              display: block;
              overflow: hidden;
            }

            .slick-track img {
              max-width: 270px;
              box-shadow: 0 3px 6px #00000075;
            }
            .slider-item img {
              max-width: 270px;
              box-shadow: 0 3px 6px #00000075;
            }

            .grey {
              background-color: rgb(231, 231, 231);
            }

            .slick-slider {
              max-width: 1140px;
              padding: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CollectionSlider;
