import React, { Component } from "react";
import NavNext from "../Components/NavNext/NavNext";
import IconNav from "../Components/IconNav/IconNav";
import ConvertKit from "../Components/ConvertKit/ConvertKit";
import Link from "next/link";
import Layout from "../Components/Layout/Layout";
import "isomorphic-fetch";

class Blogs extends Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    if (req !== undefined) {
      console.log(req.query);
      let query = req.query;
      if (Object.keys(query).length !== 0) {
        const response = await fetch(baseUrl + "/api/blog/search/" + query.q);

        const blogs = await response.json();
        return { blogs: blogs };
      } else {
        const response = await fetch(baseUrl + "/api/blog/loadall");

        const blogs = await response.json();
        return { blogs: blogs };
      }
    }
  }

  render() {
    return (
      <Layout>
        <div className="blogs">
          <NavNext />
          <IconNav />
          <ConvertKit />
          <div className="container-fluid">
            <div className="row-contained">
              {this.props.blogs.map((blog, index) => {
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
