import express, {Request, Response} from 'express';
import {schemaValidationMDW} from '../../../middlewares/schemaValidation';
import {getResponseError, ResponseService}
  from '../../../services/response/ResponseService';
import {ILoginRequest} from '../interfaces/login.req.types';
import {AuthRoutes} from '../routes/routes';
import {AuthSchema} from '../schema/auth.schema';
import AuthService from '../services/AuthService';
import ResponseError from '../../../services/response/ResponseError';
import {LogService} from '../../../services/log/LogService';

const AuthController = express.Router();

AuthController.post(AuthRoutes.LOGIN,
    async (req:Request, res:Response) => {
      try {
        const nBody = req.body;
        const nRes = await AuthService.login(nBody as ILoginRequest);
        ResponseService.json(res, nRes?.data, 200);
      } catch (error:any) {
        ResponseService.sendError(res, error);
      }
    });

AuthController.post(
    AuthRoutes.REGISTER,
    schemaValidationMDW(AuthSchema.register, 'body'),
    async (req: Request, res: Response) => {
      try {
        const data = await AuthService.register(req.body);
        ResponseService.json(res, data, 200);
        return;
      } catch (error) {
        return new ResponseError('', 500);
      }
    });


AuthController.get(AuthRoutes.USERS,
    async (req: Request, res: Response) => {
      try {
        const data = await AuthService
            .getUsers();
        ResponseService.json(res, data.data, data.statusCode || 200);
        return;
      } catch (error: any) {
        LogService.error(error);
        ResponseService.sendError(res,
            getResponseError(error.message, 500));
      }
    });


export default AuthController;
