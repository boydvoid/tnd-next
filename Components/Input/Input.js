import React from "react";
const Input = props => (
  <div>
    <input
      value={props.value}
      className={`mainInput ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      id={props.id}
    />
    <style jsx>
      {`
        .mainInput {
          border: none;
          padding-left: 10px;
          transition: all 0.5s ease;
        }
      `}
    </style>
  </div>
);

export default Input;
