import { DataTypes, Model } from "sequelize";
import db from "../config/database";
import { Character } from "../interfaces/character.interface";

class CharacterModel extends Model<Character> implements Character {
  public id!: number;
  public name!: string;
  public status!: string;
  public species!: string;
  public type!: string;
  public gender!: string;
  public image!: string;
  public url!: string;
  public created!: Date;
}

CharacterModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // Assuming id is not auto-incrementing
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "characters", // Assuming the table name is "characters"
  }
);

export default CharacterModel;
