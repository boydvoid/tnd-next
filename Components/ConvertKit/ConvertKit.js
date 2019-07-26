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
    title: this.props.title,
    button: "Submit"
  };

  /**
   * Submit the convertkit form
   * @param {*} e
   */
  submitForm = e => {
    this.onSuccess();
    e.preventDefault();
    console.log(e.target);
    let data = {
      first_name: this.state.name,
      email: this.state.email,
      tags: this.state.tags
    };

    /**
     * submit the subscriber and update the form
     */
    api.submitSubscriber(data).then(data => {
      this.setState({
        loading: false,
        title: "Check your email!",
        name: "",
        email: "",
        button: "Submitted!"
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
      title: "Submitting form...",
      button: "..."
    });
  };
  render() {
    return (
      <div className="container-fluid convert-kit-div border-bottom">
        <div className="container card-shadow">
          <div className="row">
            <div className="col-xl-10">
              <h1>{this.state.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
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
                    {this.state.button}
                  </PBtn>
                </div>
              </div>
            </form>
          </div>
        </div>
        <style jsx>
          {`
            .convert-kit-div {
              background-color: #bce7fd;
              padding: 117px;
              text-align: center;
            }

            .convert-kit-div p {
              margin-top: 20px !important;
              margin-bottom: 20px !important;
            }

            .convert-input {
              padding: 15px;
              width: 100%;
              max-width: 264px;
            }

            .convert-kit-div select {
              max-width: 264px;
              border: 1px solid black;
              padding: 2px 10px 2px 10px;
              -webkit-transition: all 0.5s ease;
              transition: all 0.5s ease;
              border: 1px solid #e2cfea;
              border-radius: 4px;
              width: 100%;
              color: #695395;
            }

            .convert-kit-div select:focus {
              background-color: #695395;
              color: #ffffff;
              transform: scale(1.1);
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

export default ConvertKit;

//TYgg8lXToCzj3_E7q4JnLw
//988284
