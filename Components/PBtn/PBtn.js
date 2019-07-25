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
          background-color: #2699fb;
          box-shadow: -4px 7px 0 #6953956b;
          border-radius: 4px;
          border: none;
          padding: 15px 50px;
          margin-top: 20px;
          color: #ffffff;
          width: 100%;
          transition: all 0.5s ease;
        }
        .primary-button:hover {
          background-color: #695395;
          box-shadow: -4px 7px 0 #2699fb6b;
          border-radius: 4px;
          border: none;
          padding: 15px 50px;
          margin-top: 20px;
          color: #ffffff;
          width: 100%;
        }

        .secondary-button {
          background-color: #2699fb;
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
