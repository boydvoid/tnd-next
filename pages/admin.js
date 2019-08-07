import React, { useState, useEffect } from "react";
import AdminNav from "../Components/AdminNav/AdminNav";
import PBtn from "../Components/PBtn";
import Link from "next/link";
import api from "../utils/api";
import Layout from "../Components/Layout/Layout";
const Admin = props => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    api.loadBlogs().then(data => {
      setBlogs(data.data);
    });
  };

  const newBlog = () => {
    let data = {
      username: props.username,
      title: "New Blog",
      img: "",
      live: false,
      views: 0,
      category: "Reading"
    };
    api.newBlog(data).then(done => {
      console.log(done);
      loadBlogs();
    });
  };

  return (
    <Layout>
      <div className="container-fluid admin">
        <AdminNav />
        <div className="container">
          <div className="columns">
            <div className="col-xl-12">
              <div className="blogs">
                <div className="blogs-header-bar">
                  <h2>Blogs</h2>
                  <span className="ml-auto">
                    <PBtn className="createNew" onClick={newBlog}>
                      <i className="fas fa-plus"></i>
                    </PBtn>
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
              {blogs.map((blog, index) => {
                return (
                  <div className="row-contained">
                    <div className="blogDisplay">
                      <div className="col-xl-3">
                        <Link href={`/blog/${blog._id}`}>
                          <a>{blog.title}</a>
                        </Link>
                      </div>
                      <div className="col-xl-1">{blog.date}</div>
                      <div className="col-xl-1">{blog.views}</div>
                      <div className="col-xl-1">{blog.live.toString()}</div>
                      <div className="col-xl-2">{blog.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
