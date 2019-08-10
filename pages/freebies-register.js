import React, { useState, useEffect } from "react";
import PBtn from "../Components/PBtn";
import Input from "../Components/Input";
import IconNav from "../Components/IconNav";
import api from "../utils/api";
import ConvertKit from "../Components/ConvertKit";
import AboutSection from "../Components/AboutSection";
import FreebieLogin from "../Components/FreebieLogin";
import FooterNext from "../Components/FooterNext";
import Layout from "../Components/Layout/Layout";
import NavNext from "../Components/NavNext";
const FreebiesReg = props => {
  const [freebies, setFreebies] = useState([]);

  useEffect(() => {
    api.loadFreebies().then(freebie => {
      setFreebies(freebie.data);
    });
  }, []);

  return (
    <Layout>
      <div className="freebies wrapper-freebies">
        <NavNext />
        <IconNav />

        <div className="container-fluid">
          <FreebieLogin register={false} />

          <div className="container">
            <div className="columns">
              <div className="freebies-title">
                <h2>
                  Want to access a FREE library of resources for upper
                  elementary classrooms?
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns is-multiline">
              <p>
                Enter your information on the form to join my newsletter! The
                first email you'll receive will give you the password for the
                FREE Resource Library!
              </p>
              <p>Do make sure to:</p>
              <ul>
                <li>
                  Enter your personal email, not your school email, which may
                  have a strong filter to block emails.
                </li>
                <li>
                  Check your SPAM or Promotions Tab, since sometimes emails are
                  sent to those areas.
                </li>
              </ul>
              <p>I promise to: </p>
              <ul>
                <li>
                  Send you information, tips, resource updates, and freebies to
                  help you as a 3rd - 6th grade teacher.
                </li>
                <li>
                  Send regular emails (about once a week) but won't spam your
                  email.
                </li>
              </ul>
            </div>
          </div>

          <div className="container-fluid">
            {/* freebies resources */}
            {freebies.map(freebie => {
              return (
                <div className="column">
                  <img src={freebie.img} alt="" />
                </div>
              );
            })}
            <ConvertKit title="JOIN MY NEWSLETTER!" />
            <FooterNext />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FreebiesReg;
