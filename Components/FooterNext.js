import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
const FooterNext = props => {
  return (
    <nav className={`container-fluid navbar ${props.className}`}>
      <div className="container">
        <span className="mr-auto">Copyright The Teacher Next Door 2019</span>
        <span className="ml-auto">
          <ul>
            <li>
              <Link href="">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>My Store</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a></a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Teacher Freebies</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Meet Jenn</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Contact Me</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <i className="fab fa-facebook"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <i className="fab fa-pinterest-square"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>TpT</a>
              </Link>
            </li>
            <li>
              <SearchBar history={props.history} />
            </li>
          </ul>
        </span>
      </div>
      <style jsx>{``}</style>
    </nav>
  );
};

export default FooterNext;
