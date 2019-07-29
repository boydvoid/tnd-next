import React from "react";
import Logo from "../images/logo.png";
import BookIcon from "../images/BookIcon.png";
import Calc from "../images/calc.png";
import Light from "../images/light.png";
import Mug from "../images/mug.png";
import Pencil from "../images/pencil.png";
import Link from "next/link";
import PBtn from "./PBtn";
const IconNav = props => (
  <nav
    className="navbar white icon-nav"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-start">
        <img src={Logo} alt="" className="logo" />
        <img src="" alt="" />
      </div>
      <div className="navbar-end">
        <ul>
          <li>
            <Link as={`/my-blog/reading`} href="/my-blog?q=reading">
              <a className="icon-link-tags">
                <img src={BookIcon} className="icons" alt="" />
                Reading
              </a>
            </Link>
          </li>
          <li>
            <Link as={`/my-blog/writing`} href="/my-blog?q=writing">
              <a className="icon-link-tags">
                <img src={Pencil} className="icons" alt="" />
                Writing & Grammar
              </a>
            </Link>
          </li>
          <li>
            <Link as={`/my-blog/math`} href="/my-blog?q=math">
              <a className="icon-link-tags">
                <img src={Calc} className="icons" alt="" />
                Math
              </a>
            </Link>
          </li>
          <li>
            <Link as={`/my-blog/holidays`} href="/my-blog?q=holidays">
              <a className="icon-link-tags">
                <img src={Mug} className="icons" alt="" />
                Holidays
              </a>
            </Link>
          </li>
          <li>
            <Link as={`/my-blog/classroom`} href="/my-blog?q=classroom">
              <a className="icon-link-tags">
                <img src={Light} className="icons" alt="" />
                Classroom Ideas
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default IconNav;
