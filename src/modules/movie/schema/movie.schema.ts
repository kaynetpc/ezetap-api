import Joi from 'joi';

export const MovieSchemaJoi = {
  movie: Joi.object({
    insuranceType: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
    plan: Joi.string(),
    patientId: Joi.string(),
  }),
  id: Joi.any(),
  page: Joi.number(),
  size: Joi.number(),
  paginate: Joi.object({
    page: Joi.number(),
    size: Joi.number(),
  }),
  dateParam: Joi.object({
    from: Joi.date(),
    to: Joi.date(),
  }),
  paginateWithDate: Joi.object({
    page: Joi.number(),
    size: Joi.number(),
    from: Joi.date(),
    to: Joi.date(),
  }),
};
