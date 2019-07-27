import React, { Component } from "react";
import PBtn from "./PBtn";
import Slider from "react-slick";
import Present from "../images/Q.png";
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
      autoplay: true,
      cssEase: "linear",
      speed: 3000,
      slidesToShow: 3,
      arrows: false
    };
    return (
      <div className="container-fluid collections border-bottom padding-30">
        <div className="container">
          <img src={Present} alt="" />
          <h1>My Products</h1>
          <Slider {...settings}>
            {this.state.items.map((item, index) => {
              return <img src={item.img} alt="" />;
            })}
          </Slider>
          <div className="columns is-centered">
            <div className="column is-2">
              <PBtn
                link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
                external={true}
              >
                Visit My Shop
              </PBtn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionSlider;
