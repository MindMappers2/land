import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/lands">Lands</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            {user.isAdmin && <Link to="/admin">Admin Panel</Link>}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
