import Joi from "joi";

export const UserValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})