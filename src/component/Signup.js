import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import api from "../api/api";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import { Navigate } from "react-router";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      confirmpassword: "",
      gender: "",
      username: "",
      age: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      firstnameErr: "",
      emailErr: "",
      passwordErr: "",
      lastnameErr: "",
      phoneErr: "",
      confirmpasswordErr: "",
      ageErr: "",
      genderErr: "",
      usernameErr: "",
      countryErr: "",
      stateErr: "",
      cityErr: "",
      pincodeErr: "",
    };
  }

  validForm = () => {
    var isValid = true;
    // var pattern = " ^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$.";
    var epattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
    var phonepattern = "[a-z0-9.-]";
    console.log(this.state.firstname);

    if (this.state.firstname.length === 0) {
      console.log(this.state.firstname.length);
      this.setState({
        firstnameErr: "First name should not be empty..",
      });
      isValid = false;
    } else if (this.state.firstname.length > 1) {
      console.log(this.state.firstname.length);

      this.setState({
        firstnameErr: "",
      });
      isValid = true;
    }

    if (this.state.lastname.length === 0) {
      this.setState({
        lastnameErr: "Last name should not be empty..",
      });
      isValid = false;
    } else if (this.state.lastname.length > 1) {
      this.setState({
        lastnameErr: "",
      });
      isValid = true;
    }

    if (!this.state.email.match(epattern)) {
      this.setState({
        emailErr: "Please Enter valid mail id..",
      });
      isValid = false;
    } else if (this.state.email.match(epattern)) {
      this.setState({
        emailErr: "",
      });
      isValid = true;
    }

    if (!this.state.phone.match(phonepattern)) {
      this.setState({
        phoneErr: "Please enter valid phone number",
      });
      isValid = false;
    } else if (this.state.phone.match(phonepattern)) {
      this.setState({
        phoneErr: "",
      });
      isValid = true;
    }

    return isValid;
  };

  submitData = () => {
    var data = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      emailId: this.state.email,
      phoneNumber: this.state.phone,
      gender: this.state.gender,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmpassword,
      age: this.state.age,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      pincode: this.state.pincode,
    };

    // console.log("signup data----", data);
    api.usercrud
      .createuser(data)
      .then((result) => {
        console.log("signup api==", result);
        alert("Thank you! Your registration was successful!");
        window.location.replace("/login");
      })
      .catch((error) => {
        console.log("signup err=====", error);
        alert("Your registration was unsuccessful.");
      });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      confirmpassword,
      gender,
      username,
      age,
      country,
      state,
      city,
      pincode,
    } = this.state;
    return (
      <div className="container">
        <Announcement />
        <Navbar />
        <div className="container mx-auto" style={{ marginTop: "10%" }}>
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Register</h1>
            </div>
          </div>

          <form
            onSubmit={this.submitHandler}
            autoComplete="off"
            className="row g-3"
          >
            <div className="form-group col-md-4">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Firstname"
              />
              <pre style={{ color: "red" }}>{this.state.firstnameErr}</pre>
            </div>
            <div className="form-group col-md-4">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Lastname"
              />
              <pre style={{ color: "red" }}>{this.state.lastnameErr}</pre>
            </div>
            <div className="form-group col-md-4">
              <label>Username</label>
              <input
                type="username"
                name="username"
                value={username}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Username"
              />
              <pre style={{ color: "red" }}>{this.state.usernameErr}</pre>
            </div>
            <div className="form-group col-md-6">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Email Address"
              />

              <pre style={{ color: "red" }}>{this.state.emailErr}</pre>
            </div>
            <div className="form-group col-md-6">
              <label>Phone Number</label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Phone Number"
              />

              <pre style={{ color: "red" }}>{this.state.phoneErr}</pre>
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Password"
              />
              <pre style={{ color: "red" }}>{this.state.passwordErr}</pre>
            </div>
            <div className="form-group col-md-6">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Confirm Password"
              />
              <pre style={{ color: "red" }}>
                {this.state.confirmpasswordErr}
              </pre>
            </div>
            <div className="form-group col-md-6">
              <label>Age</label>
              <input
                type="age"
                name="age"
                value={age}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Age"
              />
              <pre style={{ color: "red" }}>{this.state.ageErr}</pre>
            </div>
            <div className="form-group col-md-6">
              <label>Gender</label>
              <input
                type="gender"
                name="gender"
                value={gender}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Gender"
              />
              <pre style={{ color: "red" }}>{this.state.genderErr}</pre>
            </div>
            <div className="form-group col-md-3">
              <label>Country</label>
              <input
                type="country"
                name="country"
                value={country}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Country"
              />
              <pre style={{ color: "red" }}>{this.state.countryErr}</pre>
            </div>
            <div className="form-group col-md-3">
              <label>State</label>
              <input
                type="state"
                name="state"
                value={state}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter State"
              />
              <pre style={{ color: "red" }}>{this.state.stateErr}</pre>
            </div>
            <div className="form-group col-md-3">
              <label>City</label>
              <input
                type="city"
                name="city"
                value={city}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter City"
              />
              <pre style={{ color: "red" }}>{this.state.cityErr}</pre>
            </div>
            <div className="form-group col-md-3">
              <label>Pincode</label>
              <input
                type="pincode"
                name="pincode"
                value={pincode}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Pincode"
              />
              <pre style={{ color: "red" }}>{this.state.pincodeErr}</pre>
            </div>

            <div className="text-center mb-3">
              <button
                exact
                to="/login"
                onClick={this.submitData}
                type="submit"
                className=" btn btn-block btn-primary"
              >
                Register
              </button>
            </div>
            <div className="">
              <div className="form-group">
                <p className="text-center">
                  <NavLink exact to="/login">
                    Already have an account?
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
