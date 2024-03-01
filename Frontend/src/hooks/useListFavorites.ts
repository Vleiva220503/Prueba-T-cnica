import { useEffect, useState } from "react";
import { CharacterFavorites } from "../interfaces/CharacterFavorites.interface";

const useCharacterFavorites = () => {
  const [favorites, setFavorites] = useState<CharacterFavorites[] | any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/character-list"
        );
        const data = await response.json();
        setFavorites(data.CharacterList);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  return { favorites };
};

export default useCharacterFavorites;
