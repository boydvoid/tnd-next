import React, { Component } from "react";
import NavNext from "../Components/NavNext";
import IconNav from "../Components/IconNav";
import ConvertKit from "../Components/ConvertKit";
import Link from "next/link";
import Layout from "../Components/Layout/Layout";
import api from "../utils/api";
import "isomorphic-fetch";

class Blogs extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    if (window.location.href.includes("q")) {
      //search param
      let query = window.location.href.split("q=")[1];
      api.search(query).then(blogs => {
        console.log(blogs);
        this.setState({
          blogs: blogs.data
        });
      });
    } else {
      console.log("loading");
      api.loadBlogs().then(blogs => {
        this.setState({
          blogs: blogs.data
        });
      });
    }
  }
  // static async getInitialProps({ req }) {
  //   const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  //   console.log(req);
  //   if (req !== undefined) {
  //     console.log(req.query);
  //     let query = req.query;
  //     if (Object.keys(query).length !== 0) {
  //       const response = await fetch(baseUrl + "/api/blog/search/" + query.q);

  //       const blogs = await response.json();
  //       return { blogs: blogs };
  //     } else {
  //       const response = await fetch(baseUrl + "/api/blog/loadall");

  //       const blogs = await response.json();
  //       return { blogs: blogs };
  //     }
  //   } else {
  //     const response = await fetch(baseUrl + "/api/blog/loadall");

  //     const blogs = await response.json();
  //     return { blogs: blogs };
  //   }
  // }

  render() {
    return (
      <Layout>
        <div className="blogs">
          <NavNext />
          <IconNav />
          <ConvertKit />
          <div className="container-fluid">
            <div className="row-contained">
              {this.state.blogs.map((blog, index) => {
                if (blog.live) {
                  return (
                    <div className="col-xl-4" key={index}>
                      <img className="slider-img" src={blog.img} alt="" />
                      <p>
                        <Link href={`/blog?q=${blog._id}`}>
                          <a>{blog.title}</a>
                        </Link>
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Blogs;
