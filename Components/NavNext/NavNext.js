import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Layout from "../Layout/Layout";
import Link from "next/link";
const NavNext = props => {
  return (
    <Layout>
      <nav className={`container-fluid navbar ${props.className}`}>
        <div className="container">
          <span className="ml-auto">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/my-blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door">
                  <a>My Store</a>
                </Link>
              </li>

              <li>
                <Link href="/freebies">
                  <a>Teacher Freebies</a>
                </Link>
              </li>
              <li>
                <Link href="/meet-jenn">
                  <a>Meet Jenn</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact Me</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/TheTeacherNextDoor">
                  <a>
                    <i className="fab fa-facebook"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/theteachernextdoor/">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.pinterest.com/TeacherNextDoor/">
                  <a>
                    <i className="fab fa-pinterest-square"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door">
                  <a>TpT</a>
                </Link>
              </li>
              <li>
                <SearchBar history={props.history} />
              </li>
            </ul>
          </span>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar {
            font-size: 13px;
            font-family: "Montserrat", sans-serif;
            height: 50px;
            background: #695395;
          }

          .navbar ul li {
            float: left;
            padding: 0px 10px;
            height: 100%;
            display: flex;
            align-items: center;
          }

          .navbar ul {
            height: 31px;
            margin: 0;
          }

          .navbar form {
            display: flex;
          }

          .navbar .searchBar {
            background-color: #45316d;
            color: #ffffff;
            width: 100%;
            left: 0;
            position: relative;
            padding: 6px;
          }

          .navbar .searchBar::placeholder {
            color: #ffffff;
          }

          .navbar button {
            background: none;
            color: #ffffff;
            padding: 0;
          }

          .navbar a {
            background: none;
            color: #ffffff;
            padding: 0;
          }

          .admin-nav {
            border-bottom: 1px solid #c6c6c6;
          }

          .navbar .title {
            font-weight: 700;
            color: #ffffff;
          }

          #navbarNav {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .navbar .primary-button {
            margin: 0;
            padding: 3px 10px 3px 10px;
            border: 3px solid #45316d;
            width: 40px;

            transition: all 0.5s ease;
          }

          .navbar .primary-button:hover {
            background-color: #001f3f;
          }
        `}
      </style>
    </Layout>
  );
};

export default NavNext;
