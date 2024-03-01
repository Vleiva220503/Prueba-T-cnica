import { CharacterFavorites } from "../interfaces/CharacterFavorites.interface";

export const useCreateFavorites = async (body: CharacterFavorites) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/character-create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};
