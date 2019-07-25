import React from "react";
import Link from "next/link";
import Layout from "../Layout/Layout";
import Slide from "./Slide";
import PBtn from "../PBtn/PBtn";
const BlogSlider = props => (
  <Layout>
    <div className="container-fluid padding-30 light-purple">
      <div className="container">
        <h1>My Blogs</h1>
        <div className="row-contained">
          {props.blogs.map((blog, index) => {
            if (blog.live && index < 8) {
              return (
                <div className="col-xl-3" key={index}>
                  <Link href={`/blog/${blog._id}`}>
                    <a>
                      <Slide title={blog.title} img={blog.img} />
                    </a>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <div className="row">
          <div className="col-xl-2">
            <PBtn>Read More</PBtn>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  </Layout>
);

export default BlogSlider;
