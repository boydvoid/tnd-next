import React, { Component } from "react";
import IconNav from "../Components/IconNav/IconNav";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Slider from "../images/freebies-slider.jpg";
import ConvertKit from "../Components/ConvertKit/ConvertKit";
import CollectionSlider from "../Components/CollectionSlider/CollectionSlider";
import BlogSlider from "../Components/BlogSlider/BlogSlider";
import api from "../utils/api";
import SocialClips from "../Components/SocialClips/SocialClips";
import AboutSection from "../Components/AboutSection/AboutSection";
import Layout from "../Components/Layout/Layout";
import Link from "next/link";
import NavNext from "../Components/NavNext/NavNext";
import FooterNext from "../Components/FooterNext/FooterNext";
import "isomorphic-fetch";
class Home extends Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const response = await fetch(baseUrl + "/api/blog/loadall");

    const blogs = await response.json();
    return { blogs: blogs };
  }

  render() {
    return (
      <Layout>
        <div className="wrapper-home">
          {/* <Navbar position="right">
            <Navlinks />
          </Navbar> */}
          <NavNext />
          <IconNav />
          <Jumbotron mainImage={Slider} />
          <ConvertKit title="Join my newsletter and gain access to a library of FREE resources for upper elementary grades!" />
          <CollectionSlider />
          <BlogSlider blogs={this.props.blogs} />
          <SocialClips />
          <AboutSection />
          <FooterNext />
        </div>
        <style jsx>{`
          .wrapper-home {
            text-align: center;
          }

          .wrapper-home .navbar {
            background-color: #695395;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Home;
