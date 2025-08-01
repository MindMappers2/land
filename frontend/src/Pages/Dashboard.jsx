import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div className="error">Please login to view your dashboard.</div>;

  // Check if user is an owner (based on userType from login)
  const isOwner = user.userType === "owner";

  return (
    <div className="dashboard-container">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Welcome back, {user.name || "User"}! 
          {isOwner ? " Manage your land listings and activities." : " Browse and manage your land rentals."}
        </p>
      </div>

      {isOwner ? (
        // Owner Dashboard
        <div className="dashboard-content">
          <div className="dashboard-card">
            <h3>Land Management</h3>
            <p>Manage your land listings and track rental activities.</p>
            <div className="dashboard-actions">
              <Link to="/add-land" className="dashboard-button primary">
                <span className="button-icon">➕</span>
                Add New Listing
              </Link>
              <button className="dashboard-button">
                <span className="button-icon">📋</span>
                View My Listings
              </button>
              <button className="dashboard-button">
                <span className="button-icon">📊</span>
                Analytics
              </button>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">📞</div>
                <div className="activity-content">
                  <h4>New Inquiry</h4>
                  <p>John D. inquired about Green Acres Farm</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💰</div>
                <div className="activity-content">
                  <h4>Payment Received</h4>
                  <p>Rental payment for Sunny Fields</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">✅</div>
                <div className="activity-content">
                  <h4>Listing Approved</h4>
                  <p>Your new listing "Riverside Farm" is now live</p>
                  <span className="activity-time">3 days ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Active Listings</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12</div>
                <div className="stat-label">Total Inquiries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$2,450</div>
                <div className="stat-label">Monthly Revenue</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.8</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Renter Dashboard
        <div className="dashboard-content">
          <div className="dashboard-card">
            <h3>Rental Management</h3>
            <p>Track your land rentals and manage your account.</p>
            <div className="dashboard-actions">
              <Link to="/lands" className="dashboard-button primary">
                <span className="button-icon">🔍</span>
                Browse Lands
              </Link>
              <button className="dashboard-button">
                <span className="button-icon">❤️</span>
                My Favorites
              </button>
              <button className="dashboard-button">
                <span className="button-icon">📞</span>
                My Inquiries
              </button>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">📋</div>
                <div className="activity-content">
                  <h4>Inquiry Sent</h4>
                  <p>You inquired about Mountain View Development</p>
                  <span className="activity-time">1 hour ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">❤️</div>
                <div className="activity-content">
                  <h4>Added to Favorites</h4>
                  <p>Green Acres Farm added to your favorites</p>
                  <span className="activity-time">2 days ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">✅</div>
                <div className="activity-content">
                  <h4>Rental Confirmed</h4>
                  <p>Your rental for Sunny Fields is confirmed</p>
                  <span className="activity-time">1 week ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Active Rentals</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8</div>
                <div className="stat-label">Favorites</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Inquiries Sent</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$1,200</div>
                <div className="stat-label">Monthly Spending</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-card">
        <h3>Account Settings</h3>
        <div className="dashboard-actions">
          <button className="dashboard-button">
            <span className="button-icon">👤</span>
            Profile Settings
          </button>
          <button className="dashboard-button">
            <span className="button-icon">🔒</span>
            Security Settings
          </button>
          <button className="dashboard-button">
            <span className="button-icon">💳</span>
            Payment Methods
          </button>
          <button className="dashboard-button">
            <span className="button-icon">📧</span>
            Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 