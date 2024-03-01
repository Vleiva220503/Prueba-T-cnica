import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "../CharacterCard.css";
import { Character } from "../interfaces/Character.interface";

interface CardItemProps {
  character: Character;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const CardItem: React.FC<CardItemProps> = ({
  character,
  isFavorite,
  onToggleFavorite,
}) => {
  const heartColor = isFavorite ? "red" : "black";

  return (
    <div className="character-card">
      <div className="card-img-container" onClick={onToggleFavorite}>
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
        />
        <button className="favorite-button" onClick={onToggleFavorite}>
          {isFavorite ? (
            <FaHeart color={heartColor} size={20} />
          ) : (
            <FaRegHeart size={20} />
          )}
        </button>
      </div>
      <div className="card-body p-2">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Status: {character.status}</p>
        <p className="card-text">Species: {character.species}</p>
      </div>
    </div>
  );
};

//export default CardItem;
