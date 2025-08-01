import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div className="error">Please login to view your dashboard.</div>;

  return (
    <div className="dashboard-container">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back, {user.name || "User"}! Manage your land listings and activities.</p>
      </div>
      <div className="dashboard-card">
        <h3>Quick Overview</h3>
        <p>Here you can manage your land listings and view your activity.</p>
        <div className="dashboard-actions">
          <button className="dashboard-button">
            Add New Listing
          </button>
          <button className="dashboard-button">
            View My Listings
          </button>
          <button className="dashboard-button">
            View Messages
          </button>
          <button className="dashboard-button">
            Account Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 