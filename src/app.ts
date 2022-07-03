import express from 'express';
import cors from 'cors';
import {AppConfigs} from './configs/app';
import AppController from './controllers/AppController';

const App = express();
/* init */
App.use(express.json());
App.use(express.text());
App.use(express.raw());
App.use(express.urlencoded({extended: false}));

App.use(cors({origin: AppConfigs.ORIGIN}));

/* register controllers */

App.use(AppConfigs.APP_ROUTE, AppController);

export default App;

