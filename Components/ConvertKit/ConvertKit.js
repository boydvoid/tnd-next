import React, { Component } from "react";
import Input from "../Input/Input";
import PBtn from "../PBtn/PBtn";
import { Helmet } from "react-helmet";
import api from "../../utils/api";

class ConvertKit extends Component {
  state = {
    name: "",
    email: "",
    tags: "",
    loading: false,
    title: this.props.title
  };

  /**
   * Submit the convertkit form
   * @param {*} e
   */
  submitForm = e => {
    onSuccess();
    e.preventDefault();
    console.log(e.target);
    let data = {
      first_name: name,
      email,
      tags
    };

    /**
     * submit the subscriber and update the form
     */
    api.submitSubscriber(data).then(data => {
      this.setState({
        loading: false,
        title: "Check your email!",
        name: "",
        email: ""
      });
      document.getElementById("convert-name").value = "";
      document.getElementById("convert-email").value = "";
      document.getElementById("convert-select").value = "grade";
      console.log(data);
    });
  };

  /**
   *  Handle the change event when typing in the input
   * @param {*} event
   */
  handleChange = event => {
    if (event.target.name === "name") {
      setName(event.target.value);
      this.setState({
        name: event.target.value
      });
    }

    if (event.target.name === "email") {
      this.setState({
        email: event.target.value
      });
    }

    if (event.target.name === "tags") {
      console.log(event.target.value);
      this.setState({
        tags: event.target.value
      });
    }
  };

  onSuccess = () => {
    this.setState({
      loading: true,
      title: "Submitting form..."
    });
  };
  render() {
    if (this.state.loading === false) {
      return (
        <div className="container-fluid convert-kit-div border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <h2>{this.state.title}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <p>
                  By entering your information, you agree to receive email from
                  me. Per my privacy policy, you may unsubscribe at any time.
                </p>
              </div>
            </div>

            <div className="row">
              <form id="convert-form" onSubmit={this.submitForm}>
                <div className="row">
                  <div className="col-xl-2">
                    <Input
                      className="convert-input"
                      id="convert-name"
                      type="text"
                      placeholder="First Name"
                      name="name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-xl-2">
                    <Input
                      className="convert-input"
                      id="convert-email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-xl-2">
                    <select
                      name="tags"
                      onChange={this.handleChange}
                      id="convert-select"
                    >
                      <option value="grade" defaultValue="selected">
                        Select a Grade
                      </option>
                      <option value="548828">Pre-k</option>
                      <option value="548830">First</option>
                      <option value="548832">Second</option>
                      <option value="548833">Third</option>
                      <option value="548834">Fourth</option>
                      <option value="548836">Fifth</option>
                      <option value="548837">Sixth</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-2">
                    <PBtn type="submit" className="secondary-button">
                      Submit
                    </PBtn>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <style jsx>
            {`
              .convert-kit-div {
                background-color: #00cafa;
                padding: 30px;
                text-align: center;
              }

              .convert-kit-div p {
                margin-top: 20px;
              }

              .convert-input {
                padding: 15px;
                width: 100%;
                max-width: 264px;
              }

              .convert-kit-div select {
                width: 100%;
                padding: 15px;
                border: none;
                max-width: 264px;
              }

              #convert-form {
                display: flex;
                flex-direction: column;
                width: 100%;
              }
            `}
          </style>
        </div>
      );
    } else {
      return (
        <div className="container-fluid convert-kit-div border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2>{this.state.title}</h2>
                <p>
                  By entering your information, you agree to receive email from
                  me. Per my privacy policy, you may unsubscribe at any time.
                </p>
                <form onSubmit={this.submitForm}>
                  <Input
                    className="convert-input"
                    id="convert-name"
                    type="text"
                    placeholder="First Name"
                    name="name"
                    onChange={this.handleChange}
                  />
                  <Input
                    className="convert-input"
                    id="convert-email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <select
                    name="tags"
                    onChange={this.handleChange}
                    id="convert-select"
                  >
                    <option value="grade" selected="selected">
                      Select a Grade
                    </option>
                    <option value="548828">Pre-k</option>
                    <option value="548830">First</option>
                    <option value="548832">Second</option>
                    <option value="548833">Third</option>
                    <option value="548834">Fourth</option>
                    <option value="548836">Fifth</option>
                    <option value="548837">Sixth</option>
                  </select>
                  <div>
                    <PBtn type="submit" className="secondary-button">
                      <Loader
                        type="Puff"
                        color="#FFFFFF"
                        height="25"
                        width="25"
                      />{" "}
                    </PBtn>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              .convert-kit-div {
                background-color: #00cafa;
                padding: 30px;
                text-align: center;
              }

              .convert-kit-div p {
                margin-top: 20px;
              }

              .convert-input {
                padding: 15px;
                width: 100%;
                max-width: 264px;
              }

              .convert-kit-div select {
                width: 100%;
                padding: 15px;
                border: none;
                max-width: 264px;
              }

              #convert-form {
                display: flex;
                flex-direction: column;
                width: 100%;
              }
            `}
          </style>
        </div>
      );
    }
  }
}

export default ConvertKit;

//TYgg8lXToCzj3_E7q4JnLw
//988284
