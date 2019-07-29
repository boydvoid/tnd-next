import React, { Component } from "react";
import NavNext from "../Components/NavNext";
import IconNav from "../Components/IconNav";
import ConvertKit from "../Components/ConvertKit";
import Link from "next/link";
import Layout from "../Components/Layout/Layout";
import api from "../utils/api";
import "isomorphic-fetch";

// class Blogs extends Component {
const Blogs = props => {
  return (
    <Layout>
      <div className="blogs">
        <NavNext />
        <IconNav />
        <ConvertKit />
        <div className="container-fluid">
          <div className="row-contained">
            {props.blogs.map((blog, index) => {
              if (blog.live) {
                return (
                  <div className="col-xl-4" key={index}>
                    <img className="slider-img" src={blog.img} alt="" />
                    <p>
                      <Link
                        as={`/blog/${blog.title}`}
                        href={`/blog?q=${blog.title}`}
                      >
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
};
Blogs.getInitialProps = async function({ req, query }) {
  console.log();
  if (Object.keys(query).length > 0) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const response = await fetch(baseUrl + "/api/blog/search/" + query.q);

    const blogs = await response.json();
    return { blogs: blogs };
  } else {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const response = await fetch(baseUrl + "/api/blog/loadall");

    const blogs = await response.json();
    return { blogs: blogs };
  }
};
export default Blogs;
