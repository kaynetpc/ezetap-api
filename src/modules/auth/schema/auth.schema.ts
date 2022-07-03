import Joi from 'joi';

export const AuthSchema = {
  login: Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
  register: Joi.object({
    user: Joi.string(),
    password: Joi.string(),
    email: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    address: Joi.string(),
    phoneNumber: Joi.string(),
    officeNumber: Joi.string(),
    userType: Joi.string(),
  }),
  forgotPassword: Joi.object({
    email: Joi.string().min(7).required().email(),

  }),
};
