import React from "react";
import PBtn from "../PBtn/PBtn";
const AdminNav = props => (
  <nav className={`container-fluid admin-navbar ${props.className}`}>
    <div className="container">
      <p className="title">{props.title}</p>

      <div id="navbarNav"></div>
      <span className="ml-auto">{/* logout */}</span>
    </div>
    <style jsx global>
      {`
        .admin-navbar {
          display: flex;
          height: 76px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .admin-navbar .title {
          background: rgb(255, 255, 255);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 37%,
            rgba(222, 222, 222, 1) 100%
          );
          width: 100%;
          max-width: 145px;
          text-align: center;
          padding: 11px;
          border-radius: 500px;
          box-shadow: 0 3px 6px #0000002e;
          color: #695395;
          font-weight: 700;
        }
      `}
    </style>
  </nav>
);

export default AdminNav;
