import http from 'http';
import App from './app';
import {AppConfigs} from './configs/app';
import {connectDB} from './configs/db';
import {LogService} from './services/log/LogService';

http.createServer(App).listen(AppConfigs.SERVER_PORT, async () => {
  LogService.info('listening on port = ' + AppConfigs.SERVER_PORT);
  try {
    await connectDB();
  } catch (error) {
    LogService.log(error);
  }
});
