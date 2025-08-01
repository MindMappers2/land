import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const AdminPanel = () => {
  const { user } = useContext(AuthContext);

  if (!user?.isAdmin) return <div className="error">Access denied.</div>;

  return (
    <div className="admin-container">
      <div className="page-header">
        <h1 className="page-title">Admin Panel</h1>
        <p className="page-subtitle">Manage users, listings, and platform settings</p>
      </div>
      <div className="admin-card">
        <h3>Welcome, Admin!</h3>
        <p>Manage users and listings here.</p>
        <div className="dashboard-actions">
          <button className="dashboard-button">
            Manage Users
          </button>
          <button className="dashboard-button">
            Manage Listings
          </button>
          <button className="dashboard-button">
            View Reports
          </button>
          <button className="dashboard-button">
            System Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 