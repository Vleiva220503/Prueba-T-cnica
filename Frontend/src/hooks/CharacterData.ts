import { useEffect, useState } from "react";
import { Character } from "../interfaces/Character.interface";
import { useCreateFavorites } from "./useCreateFavorite";

const useCharacterData = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favorites, setFavorites] = useState<Character[]>([]);

  const toggleFavorite = (character: Character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      removeFromFavorites(character);
    } else {
      addToFavorites(character);
    }
  };

  const addToFavorites = (character: Character) => {
    if (!favorites.some((fav) => fav.id === character.id)) {
      setFavorites([...favorites, character]);
    }

    useCreateFavorites({
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      image: character.image,
      url: character.image,
      created: new Date(),
      type: character.species,
    });
  };

  const removeFromFavorites = (character: Character) => {
    setFavorites(favorites.filter((fav) => fav.id !== character.id));

    // todo: agregar la peticion useDeleteFavorites
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  return { characters, favorites, toggleFavorite };
};

export default useCharacterData;
