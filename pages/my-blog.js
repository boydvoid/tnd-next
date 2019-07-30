import React, { Component } from "react";
import NavNext from "../Components/NavNext";
import IconNav from "../Components/IconNav";
import ConvertKit from "../Components/ConvertKit";
import Link from "next/link";
import Layout from "../Components/Layout/Layout";
import api from "../utils/api";
import "isomorphic-fetch";
import Card from "../Components/Card";
// class Blogs extends Component {
const Blogs = props => {
  return (
    <Layout>
      <div className="blogs">
        <NavNext />
        <IconNav />
        <ConvertKit />
        <div className="container">
          <div className="columns is-multiline is-centered">
            {props.blogs.map((blog, index) => {
              if (blog.live) {
                return (
                  <div className="column is-3" key={index}>
                    <Card
                      title={blog.title}
                      img={blog.img}
                      description={blog.description}
                      category={blog.category.split(",")[0]}
                    />
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
