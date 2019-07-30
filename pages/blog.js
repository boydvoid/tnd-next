import React from "react";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import PBtn from "../Components/PBtn";
import Input from "../Components/Input";
import Layout from "../Components/Layout/Layout";
import Header from "../Components/Header";
import { useRouter } from "next/router";

import "isomorphic-fetch";

const BlogPage = props => {
  const categories = props.blogs.category.split(",");
  return (
    <Layout>
      <div className="blogPage">
        <Header />
        <div className="container-fluid blog-container">
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="title-container">
                <div className="categories">
                  {categories.map(category => {
                    return <p className={`tag ${category}`}>{category}</p>;
                  })}
                </div>
                <h1 className="blog-title">{props.blogs.title}</h1>
                <p>By: Jennifer Larson</p>
                <p>{props.blogs.date}</p>
                <ul>
                  <li>
                    {" "}
                    <PBtn
                      className="social-icons"
                      link="https://www.facebook.com/TheTeacherNextDoor"
                      external={true}
                    >
                      <i className="fab fa-facebook"></i>
                    </PBtn>{" "}
                  </li>
                  <li>
                    {" "}
                    <PBtn
                      className="social-icons"
                      link="https://www.instagram.com/theteachernextdoor/"
                      external={true}
                    >
                      <i className="fab fa-instagram"></i>
                    </PBtn>{" "}
                  </li>
                  <li>
                    {" "}
                    <PBtn
                      className="social-icons"
                      link="https://www.pinterest.com/TeacherNextDoor/"
                      external={true}
                    >
                      <i className="fab fa-pinterest-square"></i>
                    </PBtn>{" "}
                  </li>
                  <li>
                    {" "}
                    <PBtn
                      className="social-icons"
                      link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
                      external={true}
                    >
                      TpT
                    </PBtn>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="preview">
          <div className="container blog-text">
            <div className="columns is-centered">
              <div className="column is-6">
                <span dangerouslySetInnerHTML={{ __html: props.blogs.blog }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

BlogPage.getInitialProps = async function({ req, query }) {
  console.log(query);
  const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  const response = await fetch(baseUrl + "/api/blog/load/" + query.q);

  const blogs = await response.json();
  return { blogs: blogs };
};
export default BlogPage;
