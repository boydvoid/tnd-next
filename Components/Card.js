import React from "react";
import PBtn from "./PBtn";
import Link from "next/link";
const Card = props => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={props.img} alt="" />
      </figure>
    </div>

    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.description}...</p>
    </div>
    <div className="card-footer">
      <p className="card-footer-item">{props.category}</p>
      <div className="card-footer-item">
        <Link as={`/blog/${props.title}`} href={`/blog?q=${props.title}`}>
          <a>
            <PBtn>Read More</PBtn>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
