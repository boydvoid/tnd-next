import React, { useState, useEffect } from "react";
import PBtn from "./PBtn";
import Input from "./Input";
import api from "../utils/api";

const CommentCard = props => {
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    api.loadReplies(props.id).then(replies => {
      console.log(replies);
      setReplies(replies.data);
    });
  }, [props.id]);

  const submitReply = e => {
    e.preventDefault();
    const fd = new FormData(e.target);

    let data = {
      name: fd.get("firstname"),
      comment: fd.get("comment"),
      blogId: props.blogId,
      reply: true,
      respondingTo: props.id
    };

    api.submitComment(data).then(done => {
      api.loadReplies(props.id).then(replies => {
        setReplies(replies.data);
      });
    });
  };

  // show the reply form for whatever comment chain you are in
  const showForm = () => {
    console.log(props.id);
    document.getElementById(props.id).style.display = "block";
  };

  const closeForm = () => {
    document.getElementById(props.id).style.display = "none";
  };
  return (
    <div className="column is-12 card">
      <div className="title">
        <h1>{props.name}</h1>
      </div>
      <div className="content">
        <p>{props.date}</p>
        <p>{props.comment}</p>
        <PBtn type="submit" onClick={showForm}>
          Reply
        </PBtn>
        <form className="replyForm" id={props.id} onSubmit={submitReply}>
          <PBtn type="button" onClick={closeForm}>
            Close
          </PBtn>
          <Input type="text" name="firstname" />
          <textarea name="comment"></textarea>
          <PBtn type="submit">Reply</PBtn>
        </form>
      </div>
      <div className="replies">
        {replies.map(reply => {
          return <div className="title">{reply.name}</div>;
        })}
      </div>
    </div>
  );
};

export default CommentCard;
