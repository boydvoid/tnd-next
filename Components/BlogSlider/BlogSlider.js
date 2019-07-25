import React from "react";
import Link from "next/link";
import Layout from "../Layout/Layout";
const BlogSlider = props => (
  <Layout>
    <div className="container padding-30">
      <div className="row-contained">
        {props.blogs.map((blog, index) => {
          if (blog.live && index < 8) {
            return (
              <div className="col-xl-3" key={index}>
                <img className="slider-img" src={blog.img} alt="" />
                <p>
                  <Link href={`/blog/${blog._id}`}>
                    <a>{blog.title}</a>
                  </Link>
                </p>
              </div>
            );
          }
        })}
      </div>
      <style jsx>
        {`
          .slider-img {
            width: 100%;
            max-width: 270px;
          }
        `}
      </style>
    </div>
  </Layout>
);

export default BlogSlider;
