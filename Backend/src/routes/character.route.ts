import { Router } from "express";

// Import controllers
import {
  CharacterCreate,
  CharacterList,
  deleteCharacter,
  updateCharacter,
} from "../controllers/character.controller";

// Create router instance

const router = Router();

// Create routes

router.get("/character-list", CharacterList);
router.post("/character-create", CharacterCreate);
router.delete("/character-delete", deleteCharacter);
router.patch("/character-update", updateCharacter);

// Export router instance

export default router;
