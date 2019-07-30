import React, { Component } from "react";
import PBtn from "../Components/PBtn";
import Input from "../Components/Input";
import Header from "../Components/Header";
import api from "../utils/api";
import Router from "next/router";
const Freebies = props => {
  const logout = async () => {
    await api.logout();

    window.location.reload();
  };
  return (
    <div className="freebies">
      <Header />
      <div className="container">
        <div className="row">
          {props.user ? (
            <div className="col-xl-12">
              <PBtn onClick={logout}>Logout</PBtn>
            </div>
          ) : (
            <div className="col-xl-12">
              <form className="login-form" action="/api/login" method="POST">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                />
                <Input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <PBtn type="submit">Get Freebies</PBtn>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Freebies;
