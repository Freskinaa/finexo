import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import AuthReducer from "./AuthReducer";
import Token from "../utils/Token";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const initialState = {
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("token") || null,
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const navigate = useNavigate();
  const API_BASE_URL = "http://75.119.136.194/api";

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/authentication/login`,
        credentials
      );

      if (response?.data?.token) {
        const userToken = jwtDecode(response.data?.token);

        localStorage.setItem("token", response.data?.token);
        localStorage.setItem("user", userToken?.name);

        dispatch({
          type: "LOGIN",
          payload: {
            user: userToken?.name,
            token: response.data?.token,
          },
        });

        navigate("/dashboard");
      } else {
        console.error("Token is not available in the server response.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const signup = async (userData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/${userData.role}`,
        userData,
        {
          headers: {
            token: Token().activeToken,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      logout();
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
