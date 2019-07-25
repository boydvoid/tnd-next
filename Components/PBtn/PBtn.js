import React from "react";
import Link from "next/link";

const PBtn = props => (
  <React.Fragment>
    {props.link === undefined ? (
      <button
        type={props.type}
        className={`primary-button ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    ) : (
      ""
    )}
    {props.external ? (
      <a
        href={props.link}
        className={`anchor ${props.className}`}
        target={props.external ? "_blank" : ""}
      >
        {props.children}
      </a>
    ) : (
      ""
    )}

    {props.external === false ? (
      <Link href={props.link}>
        <a
          className={`anchor ${props.className}`}
          target={props.external ? "_blank" : ""}
        >
          {props.children}
        </a>
      </Link>
    ) : (
      ""
    )}
    <style jsx global>
      {`
        .primary-button {
          background-color: #695395;
          border: none;
          padding: 15px 50px;
          margin-top: 20px;
          color: #ffffff;
          width: 100%;
        }

        .secondary-button {
          background-color: #001f3f;
          border: none;
          padding: 15px 50px;
          margin-top: 20px;
          color: #ffffff;
          width: 100%;
        }

        .createNew {
          border-radius: 110%;
          border: none;
          padding: 10px;
          margin: 0;
          width: 57px;
          height: 57px;
          background-color: #e5e5e5;
          color: #000000;
        }
      `}
    </style>
  </React.Fragment>
);

export default PBtn;
