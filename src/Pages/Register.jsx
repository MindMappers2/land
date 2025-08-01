import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="form-group">
          <input 
            name="name" 
            placeholder="Full Name" 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            name="email" 
            type="email"
            placeholder="Email Address" 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
