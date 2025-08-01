import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(form);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <div className="logo-icon">🏞️</div>
            <h1>Land Rental</h1>
          </div>
          <p className="login-subtitle">Welcome back to your account</p>
        </div>
        
        <div className="form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Sign In</h2>
            <p className="form-description">Enter your credentials to access your account</p>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input 
                  id="email"
                  name="email" 
                  type="email"
                  placeholder="Enter your email" 
                  value={form.email}
                  onChange={handleChange} 
                  required 
                />
                <span className="input-icon">📧</span>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input 
                  id="password"
                  name="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password" 
                  value={form.password}
                  onChange={handleChange} 
                  required 
                />
                <span className="input-icon">🔒</span>
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
            
            <div className="form-options">
              <label className="checkbox-wrapper">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
            </div>
            
            <button type="submit" disabled={isLoading} className="login-button">
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
            
            <div className="login-footer">
              <p>Don't have an account? <Link to="/register" className="register-link">Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
