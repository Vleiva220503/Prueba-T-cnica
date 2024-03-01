import React from "react";
//import CharacterCard from "./CharacterCard";

import { CardItem } from "./CardItem";
import { Character } from "../interfaces/Character.interface";

interface CharacterListProps {
  characters: Character[];
  favorites: Character[];
  onToggleFavorite: (character: Character) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  favorites,
  onToggleFavorite,
}) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CardItem
          key={character.id}
          character={character}
          isFavorite={favorites.some((fav) => fav.id === character.id)}
          onToggleFavorite={() => onToggleFavorite(character)}
        />
      ))}
    </div>
  );
};

export default CharacterList;
