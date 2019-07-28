import React, { Component } from "react";
import api from "../utils/api";
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
class BlogPage extends Component {
  state = {};

  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    console.log(req);
    if (req !== undefined) {
      const response = await fetch(baseUrl + "/api/blog/load/" + req.query.q);

      const blogs = await response.json();
      return { blogs: blogs };
    }
  }
  render() {
    return (
      <Layout>
        <div className="blogPage">
          <Header />
          <div className="container-fluid blog-container">
            <div className="row">
              <div className="col-xl-12 center">
                <div className="title-container">
                  <h1 className="blog-title">{this.props.blogs.title}</h1>
                  <p>By: Jennifer Larson</p>
                  <p>{this.props.blogs.date}</p>
                  <ul>
                    <li>
                      {" "}
                      <PBtn
                        link="https://www.facebook.com/TheTeacherNextDoor"
                        external={true}
                      >
                        <i className="fab fa-facebook"></i>
                      </PBtn>{" "}
                    </li>
                    <li>
                      {" "}
                      <PBtn
                        link="https://www.instagram.com/theteachernextdoor/"
                        external={true}
                      >
                        <i className="fab fa-instagram"></i>
                      </PBtn>{" "}
                    </li>
                    <li>
                      {" "}
                      <PBtn
                        link="https://www.pinterest.com/TeacherNextDoor/"
                        external={true}
                      >
                        <i className="fab fa-pinterest-square"></i>
                      </PBtn>{" "}
                    </li>
                    <li>
                      {" "}
                      <PBtn
                        link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
                        external={true}
                      >
                        TpT
                      </PBtn>{" "}
                    </li>
                  </ul>
                </div>
                <div className="preview">
                  <span
                    dangerouslySetInnerHTML={{ __html: this.props.blogs.blog }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
// const BlogPage = props => {
//   const [id, setId] = useState("");
//   const [editorHTML, setEditorHTML] = useState({ __html: "<p></p>" });
//   const [titleInputVal, setTitleInputVal] = useState("");
//   const [date, setDate] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     // let url = window.location.href.split("/");
//     // setId(url[4]);
//     // api.loadBlog(url[4]).then(blog => {
//     //   let viewsUpdate = {
//     //     id: url[4],
//     //     views: blog.data.views + 1
//     //   };
//     //   api.updateViews(viewsUpdate).then(done => {
//     //     console.log("updated views");
//     //   });
//     //   setTitleInputVal(blog.data.title);
//     //   setImageUrl(blog.data.img);
//     //   setDate(blog.data.date);
//     //   setEditorHTML({ __html: blog.data.blog });
//     // });
//   }, []);

//   return (

//   );
// };

export default BlogPage;
