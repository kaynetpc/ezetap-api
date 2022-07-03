import Joi from 'joi';
export const TokenSchemaJoi = {
  validate: Joi.object({
    name: Joi.string(),
    token: Joi.string(),
    description: Joi.string(),
    date: Joi.date(),
    userId: Joi.string(),
  }),
};
