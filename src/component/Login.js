import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import api from "../api/api";
import { Navigate } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  clickHandler = () => {
    // console.log(this.props);
    api.login
      .userget()
      .then((result) => {
        // console.log("userget =", result);
        result.filter((item) => {
          if (
            (item.emailId === this.state.email ||
              item.phoneNumber == this.state.email ||
              item.username == this.state.email) &&
            item.password === this.state.password
          ) {
            localStorage.setItem("userDetails", JSON.stringify(item));
            alert("Login Successful");
            window.location.replace("/");
            // this.context.router.push("/");
            // console.log(item)
            // <Navigate replace to="/login" />
          }
          console.log("login item=", item);
        });
      })
      .catch((error) => {
        console.log("error=", error);
        alert("Login Failed");
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <Announcement />
        <Navbar />
        <div className="col-md-5 mx-auto" style={{ marginTop: "10%" }}>
          <div id="first">
            <div className="logo mb-3">
              <div className="col-md-12 text-center">
                <h1>Login</h1>
              </div>
              <form onSubmit={this.submitHandler} autoComplete="off">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    // type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    className="form-control"
                    //title="Example:name@gmail.com"
                    placeholder="Enter Email/Phone/Username"
                    //required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    className="form-control"
                    //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    //title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    //required
                    placeholder="Enter Password"
                  />
                </div>

                <div className="col-md-12 text-center ">
                  <button
                    onClick={this.clickHandler}
                    type="submit"
                    className=" btn btn-block btn-primary"
                    style={{ marginTop: "2%" }}
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-12 ">
                  <div className="login-or">
                    <span className="span-or">or</span>
                  </div>
                </div>

                <div className="form-group">
                  <p className="text-center">
                    Don't have account?{" "}
                    <NavLink exact to="/register">
                      Register here
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
