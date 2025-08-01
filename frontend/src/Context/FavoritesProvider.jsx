import React, { useState, useEffect } from "react";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (land) => {
    setFavorites((prev) => [...prev, land]);
  };

  const removeFavorite = (landId) => {
    setFavorites((prev) => prev.filter((l) => l.id !== landId));
  };

  const isFavorite = (landId) => favorites.some((l) => l.id === landId);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}; 