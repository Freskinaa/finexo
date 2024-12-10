import React, { useState } from "react";
import SectionTitle from "../components/Shared/SectionTitle";
import Button from "../components/Shared/Button";
import "../style/loginRegister.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    last_name: "",
    name: "",
    password: "",
    role: "addagent",
    status: "active",
  });

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="login-register_form">
      <div className="main-container">
        <SectionTitle title="Signup to Finexo" darkBg={true} />
        <form>
          <div className="inputs">
            <input
              type="text"
              placeholder="First Name"
              value={formData.name}
              name="name"
              onChange={handleChanges}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChanges}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChanges}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChanges}
              required
            />
            <Button text="Signup" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupPage;
