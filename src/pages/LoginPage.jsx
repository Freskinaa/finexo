import React, { useState } from "react";
import SectionTitle from "../components/Shared/SectionTitle";
import Button from "../components/Shared/Button";
import "../style/loginRegister.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };
  return (
    <div className="login-register_form">
      <div className="main-container">
        <SectionTitle title="Login to Finexo" darkBg={true} />
        <form>
          <div className="inputs">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button text="Login" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
