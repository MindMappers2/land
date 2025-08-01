import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider";
import { FavoritesProvider } from "./Context/FavoritesProvider";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import LandList from "./Pages/LandList";
import LandDetail from "./Pages/LandDetail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import AdminPanel from "./Pages/AdminPanel";
import Favorites from "./Pages/Favorites";
import AgriculturalLands from "./Pages/AgriculturalLands";
import DevelopmentLands from "./Pages/DevelopmentLands";

const App = () => (
  <div className="App">
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lands" element={<LandList />} />
              <Route path="/lands/:id" element={<LandDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/lands/agricultural" element={<AgriculturalLands />} />
              <Route path="/lands/development" element={<DevelopmentLands />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  </div>
);

export default App;
