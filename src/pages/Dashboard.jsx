import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Token from "../utils/Token";
import Button from "../components/Shared/Button";
import SectionTitle from "../components/Shared/SectionTitle";
import "../style/dashboard.css";

const Dashboard = () => {
  const { state, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (state?.token) {
      const decodedToken = Token();

      if (decodedToken && decodedToken !== false) {
        setUserData({
          name: decodedToken.name,
          email: decodedToken.email,
          lastName: decodedToken.lastName,
        });
      }
    }
  }, [state?.token]);

  return (
    <div className="dashboard">
      <div className="main-container">
        <div className="dashboard-content">
          <SectionTitle title="Welcome to the Dashboard" darkBg={false} />
          {userData ? (
            <ul className="user-data">
              <li>
                <span>First Name:</span> {userData?.name}
              </li>
              <li>
                <span>Last Name:</span> {userData?.lastName}
              </li>
              <li>
                <span>Email:</span> {userData?.email}
              </li>
            </ul>
          ) : (
            <p>Loading user information...</p>
          )}
          <Button className="logout-btn" text="Logout" onClick={logout} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
