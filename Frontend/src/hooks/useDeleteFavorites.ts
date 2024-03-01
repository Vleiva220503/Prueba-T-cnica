export const useDeleteFavorites = async (id: number) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/character-delete/${id}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};
