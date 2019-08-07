import React, { useState, useEffect } from "react";
import AdminNav from "../Components/AdminNav/AdminNav";
import api from "../utils/api";
import Upload from "../Components/Upload";
const Images = props => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    api.loadImages().then(data => {
      setImages(data.data);
      console.log(data.data);
    });
  };

  return (
    <div className="container-fluid admin">
      <AdminNav />
      <Upload />
      <div className="container">
        <div className="row-contained">
          <div className="col-xl-12">
            <div className="blogs">
              <div className="blogs-header-bar">
                <h2>Images</h2>
                <span className="ml-auto">
                  {/* <PBtn className="createNew" onClick={newBlog}>
                    <i className="fas fa-plus"></i>
                  </PBtn> */}
                </span>
              </div>
            </div>
            <div className="row-contained">
              <div className="col-xl-3">
                <p>Title</p>
              </div>
              <div className="col-xl-1">
                <p>Date</p>
              </div>
              <div className="col-xl-1">
                <p>Views</p>
              </div>
              <div className="col-xl-1">
                <p>Live</p>
              </div>
              <div className="col-xl-2">
                <p>Categories</p>
              </div>
            </div>
            {images.map((image, index) => {
              return (
                <div>
                  <img src={`http://localhost:5000/${image.path}`} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
