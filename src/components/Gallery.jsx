import React, { useState } from "react";
import ImageCard from "./ImageCard";
import images from "../data/images.json";

export default function Gallery() {
  const [favorites, setFavorites] = useState([]); // Hook para favoritos
  const [search, setSearch] = useState(""); // Hook para búsqueda

  // Función para alternar favoritos
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filtrado en base al buscador
  const filteredImages = images.filter(img =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="gallery-container">
      <h2>Galería</h2>
      <p>Favoritos: {favorites.length}</p>

      {/* Input para filtrar */}
      <input
        type="text"
        placeholder="Buscar imagen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="gallery">
        {filteredImages.map((img) => (
          <ImageCard
            key={img.id}
            image={img}
            isFavorite={favorites.includes(img.id)}
            onToggleFavorite={() => toggleFavorite(img.id)}
          />
        ))}
      </div>
    </div>
  );
}
