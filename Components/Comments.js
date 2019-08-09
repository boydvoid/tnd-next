import React, { Component } from "react";
import Input from "./Input";
import PBtn from "./PBtn";
import api from "../utils/api";
import CommentCard from "./CommentCard";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
    api.loadComments(this.props.blogId).then(data => {
      console.log(data.data);
      this.setState({
        comments: data.data
      });
    });
  };

  formSubmit = async e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    let data = {
      name: fd.get("firstname"),
      comment: fd.get("comment"),
      blogId: this.props.blogId,
      reply: false
    };

    let submit = await api.submitComment(data);
    console.log(submit);
  };
  render() {
    return (
      <div className="comments">
        <div className="contianer">
          <div className="columns is-multiline is-centered">
            <div className="column is-12 has-text-centered">
              <h1>Comments</h1>
            </div>
            <div className="column is-6 has-text-centered">
              <form onSubmit={this.formSubmit}>
                <Input type="text" name="firstname" placeholder="First Name" />
                <textarea
                  name="comment"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Add your comment..."
                ></textarea>
                <PBtn type="submit">Submit</PBtn>
              </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns is-multiline">
            {this.state.comments.map(comment => {
              if (comment.reply === false) {
                return (
                  <CommentCard
                    name={comment.name}
                    date={comment.date}
                    comment={comment.comment}
                    id={comment._id}
                    blogId={this.props.blogId}
                  />
                );
              } else {
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
