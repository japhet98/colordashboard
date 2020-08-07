import React, { Component } from "react";
import AuthLayout from "../../../Layouts/AuthLayout";
import TextInput from "../../../Layouts/Elements/InputText/InputText";
import "./index.css";
import Button from "../../../Layouts/Elements/Button/Button";
import { Link } from "react-router-dom";
class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      othername: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <AuthLayout>
          <div className="container">
            <div className="card card-body register-card">
              <h1 className="mx-auto">Register</h1>
              <form className="form-group">
                <TextInput
                  label="First Name"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  required
                />
                <TextInput
                  label="Other Name"
                  name="othername"
                  value={this.state.othername}
                  onChange={this.handleChange}
                />
                <TextInput
                  label="Last Name"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  required
                />
                <TextInput
                  label="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <TextInput
                  label="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <TextInput
                  label="Confirm Password"
                  name="confirmpassword"
                  value={this.state.confirmpassword}
                  onChange={this.handleChange}
                  required
                />
                <div className="btn-container ">
                  <Button label="Sign Up" className="btn-login" />
                </div>

                <span className="registered">
                  <Link to="/login">
                    <b>Already have an Account? Login</b>
                  </Link>
                </span>

                {/* <span className="resetpass">
                  <Link to="/register">
                    {" "}
                    <b>Forgot Password? Reset Password</b>
                  </Link>
                </span> */}
              </form>
            </div>
          </div>
        </AuthLayout>
      </div>
    );
  }
}

export default RegisterPage;
