import React, { Component } from "react";
import AuthLayout from "../../../Layouts/AuthLayout";
import TextInput from "../../../Layouts/Elements/InputText/InputText";
import "./index.css";
import Button from "../../../Layouts/Elements/Button/Button";
import { Link } from "react-router-dom";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            <div className="card card-body login-card">
              <h1 className="mx-auto">Login </h1>
              <form className="form-group">
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
                  <Button label="Login" className="btn-login" />
                </div>

                <span className="not-registered">
                  <Link to="/register">
                    <b>Don't have an Account? Register</b>
                  </Link>
                </span>

                <span className="resetpass">
                  <Link to="/forgetpassword">
                    {" "}
                    <b>Forgot Password? Reset Password</b>
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </AuthLayout>
      </div>
    );
  }
}

export default LoginPage;
