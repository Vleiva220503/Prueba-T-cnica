// character.dto.js

import Joi from "joi";

export const CreatecharacterDto = Joi.object({
  name: Joi.string().required(),
  status: Joi.string().required(),
  species: Joi.string().required(),
  type: Joi.string().required(),
  gender: Joi.string().required(),
  image: Joi.string().required(),
  url: Joi.string().required(),
  created: Joi.date().iso().required(),
});
