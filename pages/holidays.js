import React, { Component } from "react";
import NavNext from "../Components/NavNext";
import IconNav from "../Components/IconNav";
import Layout from "../Components/Layout/Layout";
import "isomorphic-fetch";
import Card from "../Components/Card";
import MiniConvert from "../Components/miniConvert";
import Footer from "../Components/Footer";

const Blogs = props => {
  return (
    <Layout>
      <div className="blogs">
        <NavNext />
        <IconNav />
        <MiniConvert />
        <div className="container blog-container">
          <div className="Holidays">
            <div className="columns is-multiline ">
              {props.blogs.map((blog, index) => {
                if (blog.live && blog.category === "Holidays") {
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
        <Footer />
      </div>
    </Layout>
  );
};
Blogs.getInitialProps = async function({ req, query }) {
  const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  const response = await fetch(baseUrl + "/api/blog/search/" + query.q);

  const blogs = await response.json();
  return { blogs: blogs };
};
export default Blogs;
