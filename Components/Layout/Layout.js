import React from "react";
import Head from "next/head";

import "../../scss/style.scss";
const Layout = props => {
  return (
    <div className="page-layout">
      <Head>
        <title>My styled page</title>
        <link
          href="https://fonts.googleapis.com/css?family=Cabin:400,700|Lato:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
      </Head>
      {props.children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }

        .container,
        .container-fluid,
        .row {
          padding: 0;
        }

        /* custom grid */
        .container {
          max-width: 1440px !important;
        }

        .row {
          justify-content: center;
        }

        .row-contained {
          width: 100%;
          max-width: 1140px;
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          justify-content: center;
        }

        .center {
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a {
          color: #000000;
        }

        .border-bottom {
          border-bottom: 1px solid #80808047 !important;
        }

        h1 {
          font-family: "Cabin", serif;
          font-size: 27px !important;
          font-weight: 700 !important;
        }

        h2 {
          font-family: "Lato", sans-serif;
          font-size: 20px;
        }

        p {
          margin: 0 !important;
        }
        p a {
          font-family: "Roboto";
          font-size: 15px;
        }

        ul {
          list-style-type: none;
        }

        .padding-30 {
          padding: 30px;
        }

        .padding-top-30 {
          padding-top: 30px;
        }

        .padding-10 {
          padding: 10px;
        }

        .card-shadow {
          background-color: #ffffff;
          border-radius: 4px;
          box-shadow: 0 20px 40px #a06cd5a6;
          padding: 30px;
        }
        .mainInput {
          border: none;
          padding-left: 10px;
          padding: 2px 10px 2px 10px;
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
          border: 1px solid #e2cfea;
          border-radius: 4px;
          width: 100%;
        }
        .mainInput::placeholder {
          color: #a06cd5a6;
        }
        .mainInput:focus {
          background-color: #a06cd5a6;
          transform: scale(1.1);
        }

        .light-purple {
          background-color: #e2cfea;
        }
      `}</style>
    </div>
  );
};

export default Layout;
