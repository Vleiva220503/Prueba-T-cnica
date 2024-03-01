import React from "react";
//import { Character } from "../types";
import { CardItem } from "../components/CardItem";
import useCharacterData from "../hooks/CharacterData";
import useCharacterFavorites from "../hooks/useListFavorites";

const CharactersPage: React.FC = () => {
  const { characters, favorites, toggleFavorite } = useCharacterData();
  const { favorites: dataFavoriteApi } = useCharacterFavorites();
  const [activeTab, setActiveTab] = React.useState<string>("characters");

  return (
    <div className="container mt-3">
      <h1>Personajes</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "characters" ? "active" : ""}`}
            onClick={() => setActiveTab("characters")}
          >
            Personajes
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "favorites" ? "active" : ""}`}
            onClick={() => setActiveTab("favorites")}
          >
            Favoritos
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeTab === "characters" ? "show active" : ""
          }`}
        >
          {characters.map((character) => (
            <CardItem
              key={character.id}
              character={character}
              isFavorite={favorites.some((fav) => fav.id === character.id)}
              onToggleFavorite={() => toggleFavorite(character)}
            />
          ))}
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "favorites" ? "show active" : ""
          }`}
        >
          {dataFavoriteApi.map((character: any) => (
            <CardItem
              key={character.id}
              character={character}
              isFavorite={favorites.some((fav) => fav.id === character.id)}
              onToggleFavorite={() => toggleFavorite(character)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
