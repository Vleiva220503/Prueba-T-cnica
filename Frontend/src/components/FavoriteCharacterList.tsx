import React from "react";
import { CardItem } from "./CardItem";
import { Character } from "../interfaces/Character.interface";

interface FavoriteCharacterListProps {
  favorites: Character[];
  onRemoveFromFavorites: (character: Character) => void;
}

const FavoriteCharacterList: React.FC<FavoriteCharacterListProps> = ({
  favorites,
  onRemoveFromFavorites,
}) => {
  const handleRemoveFromFavorites = (character: Character) => {
    onRemoveFromFavorites(character);
  };

  return (
    <div className="container mt-3">
      <h1>Favorites</h1>
      {favorites.map((character) => (
        <CardItem
          key={character.id}
          character={character}
          isFavorite={true}
          onToggleFavorite={() => handleRemoveFromFavorites(character)} //
        />
      ))}
    </div>
  );
};

export default FavoriteCharacterList;
