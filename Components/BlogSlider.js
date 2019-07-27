import React from "react";
import Link from "next/link";
import Layout from "./Layout/Layout";
import Slide from "./Slide";
import PBtn from "./PBtn";
import Paper from "../images/V.png";
const BlogSlider = props => (
  <Layout>
    <div className="container-fluid padding-30 light-purple">
      <div className="container white-bg padding-30">
        <img src={Paper} alt="" />
        <h1>My Blogs</h1>
        <div className="columns is-multiline is-centered">
          {props.blogs.map((blog, index) => {
            if (blog.live && index < 8) {
              return (
                <div className="column is-3" key={index}>
                  <Link href={`/blog/${blog._id}`}>
                    <a>
                      <Slide
                        title={blog.title}
                        img={blog.img}
                        category={blog.category}
                      />
                    </a>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <div className="container-fluid">
          <div className="columns is-centered">
            <div className="column is-2">
              <PBtn>Read More</PBtn>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  </Layout>
);

export default BlogSlider;
