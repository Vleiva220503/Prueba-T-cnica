import { Request, Response } from "express";

import { CreatecharacterDto } from "../dto/Createcharacter.dto";
import CharacterModel from "../models/character.model";

export const CharacterList = async (req: Request, res: Response) => {
  const CharacterList = await CharacterModel.findAll();

  res.status(200).json({ CharacterList });
};

export const CharacterCreate = async (req: Request, res: Response) => {
  const { error, value } = CreatecharacterDto.validate(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  try {
    const newCharacter = await CharacterModel.create(value);
    res.status(201).json({ newCharacter });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const Character = await CharacterModel.findByPk(id);

    if (!Character) {
      res.status(404).json({ msg: "Character not found" });
    }
    if (Character) await Character.update(req.body);

    res.status(200).json({ Character });
  } catch (error) {
    res.status(500).json({ msg: "Error. Try again" });
  }
};

export const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const character = await CharacterModel.findByPk(id);

    if (!character) {
      return res.status(404).json({ msg: "Character not found" });
    }

    await character.destroy();

    return res.status(200).json({ msg: "Character deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error deleting character" });
  }
};
