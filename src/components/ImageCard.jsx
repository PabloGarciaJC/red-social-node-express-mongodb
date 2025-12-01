import React from "react";

export default function ImageCard({ image, isFavorite, onToggleFavorite }) {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
      </button>
    </div>
  );
}
