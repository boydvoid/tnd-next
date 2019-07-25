import React from "react";
import Logo from "../../images/logo.png";
import BookIcon from "../../images/BookIcon.png";
import Calc from "../../images/calc.png";
import Light from "../../images/light.png";
import Mug from "../../images/mug.png";
import Pencil from "../../images/pencil.png";
import Link from "next/link";
const IconNav = props => (
  <div className="container icon-nav">
    <img src={Logo} alt="" className="logo" />
    <span className="ml-auto icon-nav-right">
      <ul>
        <li>
          <Link href="/my-blog?q=reading">
            <a className="icon-link-tags">
              <img src={BookIcon} className="icons" alt="" />
              Reading
            </a>
          </Link>
        </li>
        <li>
          <Link href="/my-blog?q=writing">
            <a className="icon-link-tags">
              <img src={Pencil} className="icons" alt="" />
              Writing & Grammar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/my-blog?q=math">
            <a className="icon-link-tags">
              <img src={Calc} className="icons" alt="" />
              Math
            </a>
          </Link>
        </li>
        <li>
          <Link href="/my-blog?q=holidays">
            <a className="icon-link-tags">
              <img src={Mug} className="icons" alt="" />
              Holidays
            </a>
          </Link>
        </li>
        <li>
          <Link href="/my-blog?q=classroom">
            <a className="icon-link-tags">
              <img src={Light} className="icons" alt="" />
              Classroom Ideas
            </a>
          </Link>
        </li>
      </ul>
    </span>
    <style jsx>
      {`
        .icon-nav {
          display: flex;
          max-height: 200px;
          height: 100%;
          padding-top: 50px;
          border-bottom: 1px solid #c6c6c6;
        }

        .icon-nav .logo {
          width: 600px;
          height: 200px;
          position: relative;
          top: -50px;
        }

        .icon-nav ul {
          list-style-type: none;
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .icon-nav ul li {
          float: left;
        }

        .icon-nav .icons {
          width: 94px;
        }

        .icon-nav-right {
          width: 50%;
          display: flex;
          justify-content: center;
        }

        .icon-link-tags {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-left: 20px;
        }
      `}
    </style>
  </div>
);

export default IconNav;
