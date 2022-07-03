import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import ResponseError from '../services/response/ResponseError';
import {ResponseService} from './../services/response/ResponseService';

export const schemaValidationMDW = (schema: Joi.Schema,
    type: 'body' | 'params' | 'query') =>
  (req: Request, res: Response, next: NextFunction) => {
    let reqData;
    switch (type) {
      case 'body':
        reqData = req.body;
        break;
      case 'params':
        reqData = req.params;
        break;
      default:
        reqData = req.query;
        break;
    }
    const {error} = schema.validate(reqData);
    if (error) {
      ResponseService.sendError(res,
          new ResponseError(error.details[0].message, 400));
      return;
    }
    req.body = req.query;
    next();
    return;
  };

