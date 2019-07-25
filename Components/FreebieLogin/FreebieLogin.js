import React, { useState, useEffect } from "react";
import PBtn from "../PBtn/PBtn";
import P from "../P/p";
const FreebieLogin = props => {
  if (props.register === true) {
    return (
      <div className="container-fluid freebie-login">
        <P>Sign up for my newsletter!</P>
        <PBtn
          link="/teacher-freebies"
          className="primary-button"
          external={false}
        >
          Register for Freebies
        </PBtn>
        <style jsx global>
          {`
            .freebie-login {
              background-color: #e8e8e8;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-content: center;
              align-items: center;
            }

            .freebie-login p {
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  } else {
    return (
      <div className="container-fluid freebie-login">
        <P>Have you already joined the newsletter?</P>
        <PBtn link="/my-freebies" className="primary-button" external={false}>
          Login
        </PBtn>
        <style jsx global>
          {`
            .freebie-login {
              background-color: #e8e8e8;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-content: center;
              align-items: center;
            }

            .freebie-login p {
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
};

export default FreebieLogin;

//TYgg8lXToCzj3_E7q4JnLw
//988284
