import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Optionally, check for existing session here
  }, []);

  const login = async (credentials) => {
    // Simulate API call
    setUser({ name: credentials.email, isAdmin: false });
  };

  const register = async (info) => {
    // Simulate API call
    setUser({ name: info.name, isAdmin: false });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 