import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import AdminNav from "../Components/AdminNav/AdminNav";
import api from "../utils/api";
import PBtn from "../Components/PBtn";
import Temp from "../images/tempImg.png";
import Input from "../Components/Input";
const AdminSlider = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    loadImages();
    console.log(images);
  });
  const newImage = async () => {
    let data = {
      title: "New Image",
      link: "https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door",
      img: ""
    };
    const res = await api.newSliderImage(data);
    console.log(res);
    loadImages();
  };

  const loadImages = () => {
    api.loadSliderImages().then(data => {
      setImages(data.data);
    });
  };

  const saveSlider = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    let newSlide = {
      title: data.get("title"),
      link: data.get("link"),
      img: data.get("img")
    };

    api.saveSlider(newSlide);
  };

  return (
    <Layout>
      <div className="container-fluid">
        <AdminNav />
        <PBtn className="createNew" onClick={newImage}>
          <i className="fas fa-plus"></i>
        </PBtn>
        <div className="container">
          {images.map((image, index) => {
            return image.img === "" ? (
              <form onSubmit={saveSlider} data-id={image._id}>
                <div>
                  <img src={Temp} alt="" />
                  <Input
                    type="text"
                    value={image.title}
                    placeholder="Title"
                    name="title"
                  />
                  <Input
                    type="text"
                    value={image.link}
                    placeholder="Link"
                    name="link"
                  />
                  <Input
                    type="text"
                    value={image.img}
                    placeholder="Image URL"
                    name="img"
                  />
                  <PBtn type="submit">Save</PBtn>
                </div>
              </form>
            ) : (
              <form onSubmit={saveSlider} data-id={image._id}>
                <div>
                  <img src={image.img} alt="" />
                  <Input
                    type="text"
                    value={image.title}
                    placeholder="Title"
                    name="title"
                  />
                  <Input
                    type="text"
                    value={image.link}
                    placeholder="Link"
                    name="link"
                  />
                  <Input
                    type="text"
                    value={image.img}
                    placeholder="Image URL"
                    name="img"
                  />
                  <PBtn type="submit">Save</PBtn>
                </div>
              </form>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AdminSlider;
