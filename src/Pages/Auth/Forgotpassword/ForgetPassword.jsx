import React, { Component } from "react";
import AuthLayout from "../../../Layouts/AuthLayout";
import TextInput from "../../../Layouts/Elements/InputText/InputText";
import "./index.css";
import Button from "../../../Layouts/Elements/Button/Button";
import { Link } from "react-router-dom";
class ForgetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
      <AuthLayout>
        <div className="container">
          <div className="card card-body forgotpass-card">
            <h1 className="mx-auto">Forgot Password </h1>
            <form className="form-group">
              <TextInput
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />

              <div className="btn-container ">
                <Button label="Send Email" className="btn-forgotpass" />
              </div>

              <span className="remembered">
                <Link to="/login">
                  <b>Remembered Accoutn Details? Login</b>
                </Link>
              </span>
            </form>
          </div>
        </div>
      </AuthLayout>
    );
  }
}

export default ForgetPasswordPage;
