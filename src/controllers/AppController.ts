import express from 'express';
import AuthController from '../modules/auth/controllers/AuthController';
import {AppRoutes} from '../routes/routes';

const AppController = express.Router();


AppController.use(AppRoutes.AUTH, AuthController);


export default AppController;
